import { useEffect, useRef } from 'react';
import { Github, Linkedin, GraduationCap, MapPin, Mail } from 'lucide-react';

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
                Full Stack Engineer with commercial C# .NET experience building enterprise applications 
                in high-volume, high-availability environments. Currently at Dematic developing systems 
                that process thousands of transactions daily for major retailers like Ocado, Amazon, and Tesco.
              </p>
              <p>
                I'm passionate about code quality, SOLID principles, and clean architecture. My approach 
                combines technical excellence with a focus on reliability, maintainability, and delivering 
                solutions that teams can trust. I practice TDD, conduct thorough code reviews, and collaborate 
                effectively in Agile teams.
              </p>
              <p>
                Beyond enterprise applications, I've built an automated trading system in Python demonstrating 
                ability to work across the full stack and deliver complex, reliable solutions. When I'm not coding, 
                you'll find me exploring new technologies, contributing to continuous improvement, or helping colleagues 
                overcome technical challenges.
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
                  <p className="text-charcoal mt-1">BSc Software Engineering (Hons)</p>
                  <p className="text-gray-500 text-sm">University of Salford • 2022-2026</p>
                  <p className="text-gray-500 text-sm">Predicted First Class</p>
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
                  <p className="text-charcoal mt-1">Manchester, United Kingdom</p>
                  <p className="text-gray-500 text-sm">Available for office & remote roles</p>
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
                    href="#contact"
                    className="inline-flex items-center gap-1 text-camel font-medium mt-2 hover:underline"
                  >
                    Send me a message →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 reveal">
              <div className="bg-navy rounded-xl p-5 text-white">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-white text-sm mt-1 font-semibold">Technologies</p>
              </div>
              <div className="bg-camel rounded-xl p-5 text-white">
                <p className="text-3xl font-bold">3</p>
                <p className="text-white text-sm mt-1 font-semibold">Major Projects</p>
              </div>
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
