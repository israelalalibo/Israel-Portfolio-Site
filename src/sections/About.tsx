import { useEffect, useRef } from 'react';
import { Github, Linkedin, GraduationCap, MapPin, Mail, Users } from 'lucide-react';

const About = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-off-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="reveal">
              <p className="text-camel font-semibold text-lg mb-2">Get to Know Me</p>
              <h2 className="text-4xl font-bold text-navy">About Me</h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed reveal">
              <p>
                Software Engineer with two years of commercial experience at Dematic (KION Group),
                where I built real time, event based warehouse and supply chain automation systems
                for Ocado, Amazon and Tesco. The work covered C# and C++ services, WMS and ERP
                integrations, and customer facing terminal software that drives physical material
                handling hardware over low level protocols.
              </p>
              <p>
                I tend to pick up the work nobody has claimed. Security had no clear owner on my team,
                so I scoped and ran a full audit and cut vulnerabilities by 60 percent. A critical
                operation was taking 45 seconds, so I profiled it and read the SQL execution plan
                rather than guessing, and brought it down to 3 seconds. I care about code quality,
                SOLID principles and clean architecture, practise TDD, review code thoroughly and
                work in Agile and Scrum teams, and I mentored the junior engineers around me.
              </p>
              <p>
                I build with AI rather than around it. I use Claude Code and GitHub Copilot daily in
                production work, and I led their adoption across my engineering team: I trialled the
                tooling myself first, rolled it out, wrote the standards for how AI generated code
                gets reviewed before release, coached colleagues through it and measured the effect on
                delivery speed and code quality. I am currently enrolled in the Anthropic AI Academy.
              </p>
              <p>
                Alongside that I take freelance client work, most recently Satellite Group and Mia
                Bassey, where clients arrive with a business problem rather than a specification and
                the scoping is part of the job. My own projects include Vestige, a commerce platform
                built solo on Next.js and PostgreSQL, and Hyperion, an autonomous trading and
                automation system in Python that runs unattended around the clock.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 reveal">
              <a
                href="https://github.com/israelalalibo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-charcoal hover:text-camel hover:shadow-md transition-all"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/israelalalibo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-charcoal hover:text-camel hover:shadow-md transition-all"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="bg-white rounded-xl p-6 shadow-card hover-lift reveal">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-camel/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-camel" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg">Education</h3>
                  <p className="text-charcoal mt-1">
                    BSc (Hons) Software Engineering with Professional Experience
                  </p>
                  <p className="text-gray-500 text-sm">University of Salford</p>
                  <p className="text-camel text-sm font-semibold mt-1">
                    First Class Honours, awarded
                  </p>
                  <p className="text-gray-500 text-sm">Graduation ceremony July 2026</p>
                  <p className="text-gray-500 text-sm">Final Year Project 83, overall 76</p>
                  <p className="text-charcoal text-sm font-medium mt-1">
                    £5,000 Academic Excellence Scholarship, University of Salford
                  </p>
                  <p className="text-gray-500 text-sm mt-3">
                    Distributed Systems, Database Systems, Networking and Security (Cisco, TCP/IP),
                    Data Structures and Algorithms, Object Oriented Programming, Web Development,
                    Software Quality Management.
                  </p>
                  <p className="text-gray-500 text-sm mt-3">
                    Member of the BCS, the British Computer Society. Enrolled in the Anthropic AI
                    Academy, covering LLM integration, agentic workflows and prompt engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl p-6 shadow-card hover-lift reveal">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg">Location</h3>
                  <p className="text-charcoal mt-1">Manchester, UK</p>
                  <p className="text-gray-500 text-sm">Available for office & remote roles</p>
                  <p className="text-gray-500 text-sm">
                    Right to work in the UK, no sponsorship required currently; may require
                    sponsorship in future.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl p-6 shadow-card hover-lift reveal">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-camel/10 rounded-lg">
                  <Mail className="w-6 h-6 text-camel" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg">Get in Touch</h3>
                  <p className="text-charcoal mt-1">
                    Always open to discussing new projects and opportunities.
                  </p>
                  <a
                    href="mailto:israelalalibo97@gmail.com"
                    className="block text-gray-500 text-sm mt-2 hover:text-camel transition-colors"
                  >
                    israelalalibo97@gmail.com
                  </a>
                  <a
                    href="tel:+447752428706"
                    className="block text-gray-500 text-sm hover:text-camel transition-colors"
                  >
                    07752428706
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-camel font-medium mt-2 hover:underline"
                  >
                    Send me a message →
                  </a>
                </div>
              </div>
            </div>

            {/* Beyond Work Card */}
            <div className="bg-white rounded-xl p-6 shadow-card hover-lift reveal">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy/10 rounded-lg">
                  <Users className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg">Beyond Work</h3>
                  <p className="text-charcoal mt-1">Youth Mentor, UCKG HelpCentre, Manchester</p>
                  <p className="text-gray-500 text-sm">
                    Leads mentorship programmes supporting young people.
                  </p>
                  <a
                    href="https://trading-portfolio-alpha.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-charcoal mt-3 underline decoration-camel/50 underline-offset-4 hover:text-camel transition-colors"
                  >
                    Funded Trader, Alpha Capital & Alpha Futures, verified payouts
                  </a>
                  <p className="text-gray-500 text-sm">
                    This is what led to building Hyperion.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 reveal">
              <button
                onClick={() => {
                  const element = document.querySelector('#skills');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-navy rounded-xl p-5 text-white text-left hover:bg-navy-dark transition-colors cursor-pointer"
              >
                <p className="text-3xl font-bold">15+</p>
                <p className="text-white text-sm mt-1 font-semibold">Technologies</p>
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-camel rounded-xl p-5 text-white text-left hover:bg-camel-dark transition-colors cursor-pointer"
              >
                <p className="text-3xl font-bold">6</p>
                <p className="text-white text-sm mt-1 font-semibold">Major Projects</p>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center reveal">
            <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[440px] lg:w-[340px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/israel-teddy.png"
                alt="Israel Alalibo"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
