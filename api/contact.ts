import { z } from 'zod';

// Vercel serverless function: POST /api/contact
// Sends the contact form to my inbox through Resend's REST API.
// Required env vars: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  message: z
    .string()
    .trim()
    .min(10, 'Please write a message of at least 10 characters.')
    .max(5000, 'Please keep your message under 5000 characters.'),
  // Honeypot: real users never see or fill this field
  company: z.string().max(0).optional().or(z.literal('')),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(request: Request): Promise<Response> {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? 'form');
      if (key === 'company') return json({ ok: true }); // silently drop bots
      fieldErrors[key] ??= issue.message;
    }
    return json({ error: 'Please check the highlighted fields.', fieldErrors }, 422);
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Contact form is missing Resend environment variables');
    return json({ error: 'The contact form is not configured yet.' }, 500);
  }

  const { name, email, message } = parsed.data;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text());
    return json({ error: 'Your message could not be sent. Please try again.' }, 502);
  }

  return json({ ok: true });
}
