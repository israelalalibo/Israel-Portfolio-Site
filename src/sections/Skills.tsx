import { useEffect, useRef } from 'react';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layout,
  FileCode,
  GitBranch,
  Container,
  Terminal,
  Sparkles,
  CreditCard,
  Bot
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills = () => {
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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Backend & Enterprise',
      icon: <Server className="w-6 h-6" />,
      skills: ['C#', 'C++', '.NET Core', 'ASP.NET Core', 'REST API Design', 'Node.js', 'Express', 'Python', 'PHP', 'Symfony', 'Entity Framework', 'n-tier Architecture'],
      color: 'navy',
    },
    {
      name: 'Databases & Data',
      icon: <Database className="w-6 h-6" />,
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Prisma', 'Doctrine ORM', 'Query Optimisation', 'Stored Procedures', 'Schema Design', 'Supabase (BaaS)'],
      color: 'camel',
    },
    {
      name: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'],
      color: 'camel',
    },
    {
      name: 'Cloud, DevOps & CI/CD',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Azure', 'Azure DevOps', 'Git', 'CI/CD Pipelines', 'Docker', 'Automated Testing', 'Locust'],
      color: 'navy',
    },
    {
      name: 'AI Engineering',
      icon: <Sparkles className="w-6 h-6" />,
      skills: ['Claude Code', 'GitHub Copilot', 'LLM API Integration', 'Prompt Engineering', 'Agentic Workflows', 'AI Code Review Standards'],
      color: 'navy',
    },
    {
      name: 'Payments & Integrations',
      icon: <CreditCard className="w-6 h-6" />,
      skills: ['Stripe', 'Paystack', 'Webhook Processing', 'Zod Validation', 'WMS & ERP Integration', 'Low Level Hardware Protocols'],
      color: 'camel',
    },
  ];

  const skillTiers = [
    {
      name: 'Commercial',
      note: 'Used daily in two years of paid production work at Dematic',
      skills: ['C#', 'C++', '.NET Core', 'SQL Server', 'Azure', 'Azure DevOps', 'Docker', 'CI/CD', 'Git', 'Agile & Scrum'],
    },
    {
      name: 'Projects & Freelance',
      note: 'Used to build and ship real products for real users',
      skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'MySQL', 'PHP', 'Symfony', 'Prisma', 'Tailwind CSS', 'Stripe', 'Paystack', 'Zod', 'Locust', 'REST API Design', 'HTML5', 'CSS3', 'Claude Code', 'GitHub Copilot', 'LLM API Integration', 'Prompt Engineering'],
    },
    {
      name: 'Familiar',
      note: 'Worked with, still building depth. Listed honestly, not as strengths',
      skills: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'MongoDB', 'DynamoDB', 'Go', 'GraphQL', 'Kafka', 'Redis', 'FastAPI', 'Angular', 'React Native'],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-camel font-semibold text-lg mb-2">What I Do</p>
          <h2 className="text-4xl font-bold text-navy">Technical Skills</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            C#, C++, .NET Core and SQL Server in commercial production work, TypeScript and Next.js in
            client delivery, and AI tooling in both. Grouped below by how deep each one actually goes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="bg-off-white rounded-xl p-6 hover-lift reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-lg ${
                  category.color === 'camel' ? 'bg-camel/10 text-camel' : 'bg-navy/10 text-navy'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest depth groupings */}
        <div className="bg-navy rounded-2xl p-8 text-white reveal">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-white/10 rounded-lg">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold">How deep each one goes</h3>
          </div>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Grouped by how I actually use them rather than by a self awarded score.
          </p>

          <div className="space-y-8">
            {skillTiers.map((tier) => (
              <div key={tier.name}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <h4 className="text-lg font-semibold text-camel-light">{tier.name}</h4>
                  <p className="text-sm text-gray-400">{tier.note}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tier.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tools */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4 reveal">
          {[
            { icon: <GitBranch className="w-5 h-5" />, name: 'Azure DevOps' },
            { icon: <Container className="w-5 h-5" />, name: 'Docker' },
            { icon: <Terminal className="w-5 h-5" />, name: 'Agile/Scrum' },
            { icon: <FileCode className="w-5 h-5" />, name: 'TDD' },
            { icon: <Bot className="w-5 h-5" />, name: 'Claude Code' },
          ].map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 p-4 bg-off-white rounded-lg hover:bg-camel/10 transition-colors"
            >
              <span className="text-camel">{tool.icon}</span>
              <span className="font-medium text-charcoal">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
