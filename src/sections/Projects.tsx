import { useEffect, useRef } from 'react';
import { ExternalLink, Github, ShoppingCart, TrendingUp, Music } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
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
      name: 'Hyperion – Automated Trading System',
      description: 'A fully automated trading system implementing the ICT 2022 methodology for forex and indices markets. The system analyzes real-time market data, detects complex patterns, executes trades, and manages risk dynamically – operating autonomously in live financial markets. Demonstrates ability to build complex, reliable systems in financial domain with strong architectural thinking.',
      techStack: ['Python', 'MetaTrader 5 API', 'Algorithmic Trading', 'YAML Configuration'],
      githubUrl: 'https://github.com/israelalalibo/Hyperion',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'navy',
    },
    {
      name: 'StudentHub – Full Stack Web Platform',
      description: 'Production web platform with MVC architecture, database integration, payment processing, and automated deployment. Features PostgreSQL integration, Stripe payment processing for secure financial transactions, load testing with Locust for performance validation, and CI/CD deployment on Vercel with automated pipelines.',
      techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'CI/CD', 'Vercel'],
      githubUrl: 'https://github.com/israelalalibo/StudentHub',
      liveUrl: 'https://student-hub-beige-pi.vercel.app',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'camel',
    },
    {
      name: 'AlbumReview – Secure Web Application',
      description: 'Web application demonstrating security-first development practices and clean, maintainable code. Features parameterized SQL queries preventing injection vulnerabilities, bcrypt password hashing, secure session management, Docker Compose for consistent development environments, and clean architecture with focus on maintainability.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Docker', 'Security Best Practices'],
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
            A selection of projects demonstrating full-stack development, from automated trading 
            systems to enterprise applications with focus on clean architecture and reliability.
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-lg text-charcoal hover:text-camel hover:shadow-md transition-all"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
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
