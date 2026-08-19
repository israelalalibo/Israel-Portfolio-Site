import { useEffect, useRef } from 'react';
import {
  ExternalLink,
  Github,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Music,
  Palette,
  User,
} from 'lucide-react';

interface Project {
  name: string;
  year: string;
  label: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: React.ReactNode;
  color: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const projects: Project[] = [
    {
      name: 'Vestige, Full Stack Commerce Platform',
      year: '2026',
      label: 'Solo build',
      description:
        'A commerce platform designed and built solo, where the money handling is the interesting part. Stripe webhooks are the source of truth rather than the client redirect, event processing is idempotent so retries are safe, prices are recomputed server side so client values are never trusted, local state is reconciled against the payment provider, and every state transition writes an audit trail. Also covers NextAuth with credentials and Google OAuth, JWT, role based access control, per variant inventory, promotional codes, Zod validation, and an admin dashboard with KPI charts and CSV export.',
      techStack: [
        'Next.js 14',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Prisma',
        'Node.js',
        'Stripe',
        'NextAuth',
        'Zod',
        'Recharts',
      ],
      githubUrl: 'https://github.com/israelalalibo/Vestige',
      liveUrl: 'https://vestige-delta.vercel.app',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'navy',
    },
    {
      name: 'Satellite Group, E-Commerce Platform',
      year: '2026',
      label: 'Client project',
      description:
        'Production e-commerce platform for a premium printing and branding company in Nigeria. Features multi-step checkout with Paystack payment integration, shopping cart with localStorage persistence, user authentication with account dashboard, design upload with file validation, admin dashboard foundation, and Nigerian market work including local pricing in Naira and WhatsApp integration. Paystack was chosen deliberately over Stripe because the client\'s customers are in Nigeria and it is the provider they trust.',
      techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Paystack API', 'Context API', 'Framer Motion'],
      githubUrl: 'https://github.com/israelalalibo/TheSatelliteGroup',
      liveUrl: 'https://the-satellite-group.vercel.app',
      icon: <Palette className="w-6 h-6" />,
      color: 'camel',
    },
    {
      name: 'Mia Bassey, Personal Brand & Portfolio',
      year: '2026',
      label: 'Client project',
      description:
        'Production portfolio website for a professional contortionist and certified stretch coach. Features a video first hero section with full bleed background video, a filterable masonry media gallery with video on hover previews and a lightbox modal, WhatsApp contact integration with a dynamic URL builder, an animated marquee ticker, and a bespoke dark mode design system with custom colour tokens and typographic pairing. Built mobile first.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      githubUrl: 'https://github.com/israelalalibo/mia-bassey-portfolio',
      liveUrl: 'https://mia-bassey-portfolio.vercel.app',
      icon: <User className="w-6 h-6" />,
      color: 'navy',
    },
    {
      name: 'Hyperion, Autonomous Trading and Automation System',
      year: '2025',
      label: 'Solo build',
      description:
        'An event driven automation system in Python that runs unattended around the clock. It integrates MetaTrader5 and REST APIs, applies rule based decision logic with dynamic risk management, and handles order routing, position management and reconciliation. Built for fault tolerance: retry logic, graceful degradation, health checks, automated recovery, comprehensive logging, Telegram alerting and a YAML config driven architecture. The trading logic implements the ICT 2022 methodology across forex and indices, detecting liquidity sweeps, market structure shifts and fair value gaps. It grew out of my own independent financial markets research.',
      techStack: ['Python', 'MetaTrader5 API', 'REST APIs', 'Event Driven Architecture', 'YAML Configuration'],
      githubUrl: 'https://github.com/israelalalibo/Hyperion',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'camel',
    },
    {
      name: 'StudentHub, Full Stack Web Platform',
      year: '2025',
      label: 'Solo build',
      description:
        'Web platform with MVC architecture, database integration, payment processing and automated deployment. Built on Node.js and Express with a vanilla JavaScript front end, PostgreSQL for persistence, Stripe for payments, and search and filtering across listings. Load tested with Locust to find the point where throughput degraded under concurrent load, then optimised against those measurements rather than by guesswork. Deployed through CI/CD on Vercel.',
      techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Vanilla JavaScript', 'Stripe API', 'Locust', 'CI/CD'],
      githubUrl: 'https://github.com/israelalalibo/StudentHub',
      liveUrl: 'https://student-hub-beige-pi.vercel.app',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'navy',
    },
    {
      name: 'AlbumReview, Secure Web Application',
      year: '2025',
      label: 'Solo build',
      description:
        'Built deliberately in a framework I did not know, in order to learn it properly. PHP 8 and Symfony with Twig templating, Doctrine ORM over MySQL, MVC structure, role based access control and applied design patterns, containerised with Docker. Security practices throughout: parameterised queries preventing injection, bcrypt password hashing and secure session management.',
      techStack: ['PHP 8', 'Symfony', 'Twig', 'Doctrine ORM', 'MySQL', 'Docker', 'RBAC'],
      githubUrl: 'https://github.com/israelalalibo/AlbumReview',
      icon: <Music className="w-6 h-6" />,
      color: 'camel',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-off-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-camel font-semibold text-lg mb-2">Highlights</p>
          <h2 className="text-4xl font-bold text-navy">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Six projects across commerce, automation and client delivery. Two are paid client work,
            live in production; the rest I designed and built solo, end to end.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className={`p-6 ${
                project.color === 'camel' ? 'bg-camel/10' : 'bg-navy/10'
              }`}>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl ${
                    project.color === 'camel' ? 'bg-camel text-white' : 'bg-navy text-white'
                  }`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-lg text-charcoal hover:text-camel hover:shadow-md transition-all"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-lg text-charcoal hover:text-camel hover:shadow-md transition-all"
                        aria-label={`View ${project.name} live demo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                      project.color === 'camel'
                        ? 'bg-camel/15 text-camel-dark'
                        : 'bg-navy/10 text-navy'
                    }`}
                  >
                    {project.label}
                  </span>
                  <span className="text-sm font-medium text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{project.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-off-white text-charcoal rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium transition-all ${
                        project.color === 'camel'
                          ? 'bg-camel text-white hover:bg-camel-dark'
                          : 'bg-navy text-white hover:bg-navy-dark'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium border-2 border-gray-200 text-charcoal hover:border-camel hover:text-camel transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium border-2 border-gray-100 text-gray-400 cursor-not-allowed"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/israelalalibo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-camel font-semibold hover:text-camel-dark transition-colors"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
