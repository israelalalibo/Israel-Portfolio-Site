import { useEffect, useRef } from 'react';
import {
  Building2,
  Briefcase,
  Users,
  Gauge,
  ShieldCheck,
  Bug,
  Sparkles,
} from 'lucide-react';

interface Achievement {
  metric: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Experience = () => {
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

  const achievements: Achievement[] = [
    {
      metric: '93%',
      title: 'Latency reduction',
      description:
        'Took a critical operation from 45 seconds to 3 seconds. I profiled it and analysed the SQL execution plan rather than guessing, then fixed the indexing and the query structure.',
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      metric: '60%',
      title: 'Fewer security vulnerabilities',
      description:
        'Security had no clear owner on the team, so I proposed a full audit, scoped it, ran it and remediated the findings. Nobody assigned this to me.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      metric: 'Peak load',
      title: 'Race condition diagnosed',
      description:
        'Traced a race condition in a multithreaded distributed production system that only surfaced under peak concurrent load, then fixed it.',
      icon: <Bug className="w-6 h-6" />,
    },
  ];

  const dematicResponsibilities = [
    'Real time, event based warehouse and supply chain automation systems for Amazon, Tesco and Ocado.',
    'C#, C++ and .NET Core services backed by SQL Server, deployed through Azure and Azure DevOps with Docker and CI/CD.',
    'WMS and ERP integrations across enterprise systems.',
    'Customer facing terminal software interfacing physical material handling hardware over low level protocols.',
    'Monitoring, logging and alerting, plus live production incident investigation.',
    'Agile and Scrum delivery, code reviews, and mentoring junior engineers.',
  ];

  const otherRoles = [
    {
      title: 'Freelance Developer',
      org: 'Production client delivery, remote',
      period: '2025 to present',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'camel',
      points: [
        'Two products delivered and live for real clients: Satellite Group and Mia Bassey.',
        'React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Stripe, Paystack and Tailwind CSS.',
        'Clients bring a business problem rather than a specification, so scoping and requirements gathering is part of the work.',
      ],
    },
    {
      title: 'Secretary',
      org: 'BCS Salford Branch, Manchester',
      period: 'September 2022 to August 2025',
      icon: <Users className="w-6 h-6" />,
      color: 'navy',
      points: [
        'Coordinated on-campus coding and e-learning events with 60+ attendees.',
        'Kept communication flowing between the BCS president and members.',
        'Facilitated knowledge sharing across the technical community.',
        'Member of the BCS, the British Computer Society.',
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-camel font-semibold text-lg mb-2">Where I've Worked</p>
          <h2 className="text-4xl font-bold text-navy">Experience</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Two years of commercial engineering on production systems that recognisable enterprise
            names depend on, alongside paid client delivery of my own.
          </p>
        </div>

        {/* Quantified Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-off-white rounded-2xl p-6 hover-lift reveal border-t-4 border-camel"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-camel/10 text-camel rounded-lg">{achievement.icon}</div>
                <p className="text-4xl font-extrabold text-navy">{achievement.metric}</p>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Current Role */}
        <div className="bg-off-white rounded-2xl p-8 mb-8 reveal">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="p-3 bg-navy text-white rounded-xl self-start">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold text-navy">Software Engineer</h3>
                <span className="text-sm font-medium text-charcoal bg-camel/15 px-3 py-1 rounded-full">
                  September 2024 to September 2026
                </span>
              </div>
              <p className="text-charcoal font-medium mt-1">
                Dematic (KION Group), Salford
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                I joined Dematic on a full-time industrial placement from September 2024 to
                September 2025, my degree's Professional Experience year, then continued part-time
                alongside my final year until September 2026. Dematic builds warehouse and supply
                chain automation, and the systems I worked on run in live production with strict
                availability requirements.
              </p>
              <ul className="mt-5 space-y-3">
                {dematicResponsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-camel shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* AI Adoption */}
        <div className="bg-navy rounded-2xl p-8 text-white mb-8 reveal">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="p-3 bg-white/10 rounded-xl self-start">
              <Sparkles className="w-6 h-6 text-camel-light" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold">Led AI tooling adoption across the team</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                I used Claude Code and GitHub Copilot daily in commercial production work at Dematic.
                Rather than
                waiting for a policy, I trialled the tooling on my own work first, then rolled it out
                across the engineering team: I defined the standards for how AI generated code is
                reviewed before it reaches release, coached colleagues through adopting it, and
                measured the impact on delivery speed and code quality. I introduced the same tooling
                to peers at university.
              </p>
              <p className="text-gray-300 mt-4 leading-relaxed">
                I am currently enrolled in the Anthropic AI Academy, covering LLM integration,
                agentic workflows and prompt engineering.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  'Claude Code',
                  'GitHub Copilot',
                  'LLM API integration',
                  'Prompt engineering',
                  'Agentic workflows',
                  'AI code review standards',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Roles */}
        <div className="grid lg:grid-cols-2 gap-8">
          {otherRoles.map((role, index) => (
            <div
              key={role.title}
              className="bg-off-white rounded-2xl p-6 hover-lift reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl text-white ${
                    role.color === 'camel' ? 'bg-camel' : 'bg-navy'
                  }`}
                >
                  {role.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy">{role.title}</h3>
                  <p className="text-charcoal font-medium mt-1">{role.org}</p>
                  <p className="text-gray-500 text-sm">{role.period}</p>
                  <ul className="mt-4 space-y-2">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 text-gray-600 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-camel shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
