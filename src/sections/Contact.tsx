import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Loader2 } from 'lucide-react';

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

// Mirrors the server side checks in api/contact.ts
const validate = (data: { name: string; email: string; message: string }): FieldErrors => {
  const errors: FieldErrors = {};
  if (data.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (data.message.trim().length < 10)
    errors.message = 'Please write a message of at least 10 characters.';
  else if (data.message.trim().length > 5000)
    errors.message = 'Please keep your message under 5000 characters.';
  return errors;
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors({ ...fieldErrors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validate(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setSubmitStatus('idle');
      const firstInvalid = (['name', 'email', 'message'] as const).find((f) => errors[f]);
      if (firstInvalid) document.getElementById(firstInvalid)?.focus();
      return;
    }

    setSubmitStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, company: honeypot }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(
        err instanceof Error && err.message !== 'Failed to fetch'
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  const inputClass = (field: keyof FieldErrors) =>
    `w-full px-4 py-3 rounded-lg border outline-none transition-all focus:ring-2 ${
      fieldErrors[field]
        ? 'border-red-600 focus:border-red-600 focus:ring-red-600/30'
        : 'border-gray-300 focus:border-camel focus:ring-camel/40'
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-navy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div className="text-white space-y-8">
            <div className="reveal">
              <p className="text-camel-light font-semibold text-lg mb-2">Get in Touch</p>
              <h2 className="text-4xl font-bold">Let's Connect</h2>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Always open to discussing new projects and opportunities, whether that is an
                engineering role, freelance client work, or a conversation about building with AI
                tooling in a production codebase. I read every message and reply.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 reveal">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="w-5 h-5 text-camel-light" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:israelalalibo97@gmail.com" 
                    className="text-white hover:text-camel-light transition-colors"
                  >
                    israelalalibo97@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="w-5 h-5 text-camel-light" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:+447752428706"
                    className="text-white hover:text-camel-light transition-colors"
                  >
                    07752428706
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-camel-light" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Manchester, UK</p>
                  <p className="text-sm text-gray-400">
                    Right to work in the UK, no sponsorship required currently; may require
                    sponsorship in future.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="reveal">
              <p className="text-sm text-gray-400 mb-3">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/israelalalibo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg text-white hover:bg-camel transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/israelalalibo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg text-white hover:bg-camel transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 reveal">
            <h3 className="text-2xl font-bold text-navy mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="form-status">
              {/* Honeypot, hidden from people and assistive tech */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  aria-invalid={!!fieldErrors.name}
                  aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  className={inputClass('name')}
                  placeholder="Jane Smith"
                />
                {fieldErrors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-700">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  className={inputClass('email')}
                  placeholder="jane@example.com"
                />
                {fieldErrors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-700">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={5000}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  className={`${inputClass('message')} resize-none`}
                  placeholder="Tell me about your project..."
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-700">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                aria-busy={submitStatus === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 btn-primary disabled:opacity-70 disabled:cursor-wait"
              >
                {submitStatus === 'sending' ? (
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="w-4 h-4" aria-hidden="true" />
                )}
                {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              <div id="form-status" role="status" aria-live="polite">
                {submitStatus === 'success' && (
                  <p className="p-4 bg-green-50 text-green-800 rounded-lg text-center">
                    Thank you, your message has been sent. I will get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="p-4 bg-red-50 text-red-800 rounded-lg text-center">
                    {errorMessage} You can also email me directly at israelalalibo97@gmail.com.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
