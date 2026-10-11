import { useEffect, useRef } from 'react';
import { ArrowDown, Linkedin } from 'lucide-react';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-[72px] bg-gradient-to-br from-white via-white to-off-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {/* Greeting */}
              <p
                className="text-camel font-semibold text-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              >
                Hello, I'm
              </p>

              {/* Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight opacity-0 animate-fade-in-up"
                style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
              >
                Israel Alalibo
              </h1>

              {/* Subheadline */}
              <p
                className="text-lg sm:text-xl lg:text-2xl text-charcoal font-medium leading-snug text-balance opacity-0 animate-fade-in-up"
                style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
              >
                Software Engineer | Full Stack (React, Next.js, TypeScript) | C#/.NET |{' '}
                <span className="whitespace-nowrap">AI-assisted development</span>
              </p>

              {/* Description */}
              <p
                className="text-lg text-gray-600 leading-relaxed max-w-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
              >
                Software Engineer with two years at Dematic (KION Group), where I built real time,
                event based warehouse and supply chain automation for Amazon, Tesco and Ocado.
                Commercial experience across C#, C++, .NET Core, SQL Server and Azure, alongside freelance
                delivery in React, Next.js and TypeScript. I use Claude Code and GitHub Copilot daily
                and led their adoption across my engineering team.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
              >
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  View My Work
                  <ArrowDown className="w-4 h-4" />
                </button>
                <a
                  href="https://www.linkedin.com/in/israelalalibo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-secondary"
                >
                  <Linkedin className="w-4 h-4" />
                  Let's Connect
                </a>
              </div>

              {/* Quick Stats */}
              <div
                className="flex flex-wrap gap-x-8 gap-y-6 pt-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
              >
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="text-left hover:scale-105 transition-transform cursor-pointer"
                >
                  <p className="text-3xl font-bold text-camel">93%</p>
                  <p className="text-sm text-gray-500">Latency Cut</p>
                </button>
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="text-left hover:scale-105 transition-transform cursor-pointer"
                >
                  <p className="text-3xl font-bold text-camel">60%</p>
                  <p className="text-sm text-gray-500">Fewer Vulnerabilities</p>
                </button>
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="text-left hover:scale-105 transition-transform cursor-pointer"
                >
                  <p className="text-3xl font-bold text-navy">2+</p>
                  <p className="text-sm text-gray-500">Years Commercial</p>
                </button>
                <button
                  onClick={() => scrollToSection('#skills')}
                  className="text-left hover:scale-105 transition-transform cursor-pointer"
                >
                  <p className="text-3xl font-bold text-navy">15+</p>
                  <p className="text-sm text-gray-500">Technologies</p>
                </button>
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="text-left hover:scale-105 transition-transform cursor-pointer"
                >
                  <p className="text-3xl font-bold text-navy">6</p>
                  <p className="text-sm text-gray-500">Major Projects</p>
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative opacity-0 animate-scale-in"
              style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-camel/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/10 rounded-full blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[440px] lg:w-[380px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/israel-macc.jpeg"
                  alt="Israel Karibo Alalibo, Software Engineer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-charcoal">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
