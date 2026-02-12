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
  Terminal
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
      skills: ['C# .NET', 'ASP.NET Core', 'REST APIs', 'Entity Framework', 'n-tier Architecture', 'Python'],
      color: 'navy',
    },
    {
      name: 'Databases & Data',
      icon: <Database className="w-6 h-6" />,
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Query Optimization', 'Stored Procedures', 'Schema Design'],
      color: 'camel',
    },
    {
      name: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'],
      color: 'camel',
    },
    {
      name: 'DevOps & CI/CD',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Azure DevOps', 'Git', 'CI/CD Pipelines', 'Docker', 'Automated Testing'],
      color: 'navy',
    },
  ];

  const languageSkills = [
    { name: 'C#', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 85 },
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
            Enterprise-focused expertise in C# .NET, SQL Server, and cloud infrastructure. 
            Committed to SOLID principles, clean code, and building reliable systems.
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

        {/* Programming Languages */}
        <div className="bg-navy rounded-2xl p-8 text-white reveal">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-white/10 rounded-lg">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold">Programming Languages</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {languageSkills.map((lang) => (
              <div key={lang.name} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/10"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="text-camel"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${lang.level}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">{lang.level}%</span>
                  </div>
                </div>
                <p className="font-medium">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tools */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 reveal">
          {[
            { icon: <GitBranch className="w-5 h-5" />, name: 'Azure DevOps' },
            { icon: <Container className="w-5 h-5" />, name: 'Docker' },
            { icon: <Terminal className="w-5 h-5" />, name: 'Agile/Scrum' },
            { icon: <FileCode className="w-5 h-5" />, name: 'TDD' },
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
