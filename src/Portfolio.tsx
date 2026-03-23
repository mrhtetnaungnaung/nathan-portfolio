import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Code, Database, Cloud, Smartphone, Award, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'JavaScript'],
    backend: ['Spring Boot', 'RESTful APIs', 'Django REST Framework'],
    frontend: ['Angular', 'Vue.js'],
    mobile: ['Flutter', 'Android (Java)'],
    cloud: ['AWS Lambda', 'DynamoDB', 'Rekognition', 'Serverless Computing', 'Firebase'],
    data: ['Elasticsearch', 'Kibana'],
    other: ['System Integration', 'Problem Solving', 'API Design']
  };

  const experience = [
    {
      title: 'Back-End Developer',
      company: 'Trevo',
      period: 'May 2024 – Present',
      responsibilities: [
        "Implemented scalable RESTful APIs using Java Spring Boot to support Trevo's digital check-in/check-out functionalities",
        'Built and maintained backend services with focus on performance and reliability',
        'Worked with serverless components and cloud services to scale features'
      ]
    },
    {
      title: 'Back End Developer',
      company: 'Gtriip',
      period: 'Oct 2022 – May 2024',
      responsibilities: [
        'Ensured smooth interaction between client-side applications and server-side backend services',
        'Collaborated closely with front-end developers and mobile app teams to deliver integrated features',
        'Contributed to API design and backend optimizations'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Acroquest Myanmar Technology Co., Ltd',
      period: 'Oct 2018 – Aug 2022',
      responsibilities: [
        'Lead backend development using modern frameworks and technologies',
        'Worked on multiple large-scale enterprise projects',
        'Developed systems following industry best practices',
        'Mentored and trained junior developers and new team members'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Acroquest Myanmar Technology Co., Ltd',
      period: 'Jun 2018 – Aug 2018',
      responsibilities: [
        'Developed Android applications for internal projects',
        'Created automated mobile testing using Appium'
      ]
    },
    {
      title: 'Game Developer (Self Study)',
      company: 'MWC Lab, UCSY',
      period: 'Sep 2017 – Nov 2017',
      responsibilities: [
        'Developed games using Unreal Engine as part of self-learning'
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  function TypingText({
    phrases,
    className = '',
    typingSpeed = 80,
    pause = 1400,
  }: {
    phrases: string[];
    className?: string;
    typingSpeed?: number;
    pause?: number;
  }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
      const current = phrases[index];
      if (!deleting && subIndex === current.length) {
        const t = setTimeout(() => setDeleting(true), pause);
        return () => clearTimeout(t);
      }
      if (deleting && subIndex === 0) {
        const t = setTimeout(() => {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }, 200);
        return () => clearTimeout(t);
      }

      const delta = deleting ? Math.round(typingSpeed / 2) : typingSpeed;
      const t = setTimeout(() => {
        setSubIndex((s) => s + (deleting ? -1 : 1));
      }, delta);
      return () => clearTimeout(t);
    }, [subIndex, deleting, index, phrases, typingSpeed, pause]);

    return (
      <p className={className}>
        <span>{phrases[index].slice(0, subIndex)}</span>
        <span className="cursor">&nbsp;|</span>
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nathan
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}>
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Htet Naung Naung
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">Backend Software Engineer</h2>
            <TypingText
              phrases={[
                'Backend Software Engineering',
                'Java Spring Boot',
                'Cloud & Serverless Systems',
                'Scalable APIs',
              ]}
              className="text-xl text-slate-400 mb-8"
              typingSpeed={70}
              pause={1500}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <MapPin size={18} className="text-cyan-400" />
              <span className="text-sm">Da Nang, Vietnam / Yangon, Myanmar</span>
            </div>
            <a href="mailto:lk.htetnaungnaung@gmail.com" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50 transition-colors">
              <Mail size={18} className="text-cyan-400" />
              <span className="text-sm">lk.htetnaungnaung@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/htet-naung-naung-68a1551b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50 transition-colors">
              <Linkedin size={18} className="text-cyan-400" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Get In Touch
            </button>
            <button onClick={() => scrollToSection('experience')} className="px-8 py-3 border border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition-all">
              View Work
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Summary</h2>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  Backend Software Engineer with 5+ years of experience building scalable backend systems and enterprise applications. Specialized in Java, Spring Boot, RESTful APIs, and cloud-based architectures. Experienced in digital check-in/check-out systems, serverless infrastructure, and distributed services.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  Strong problem-solving background with achievements in ACM-ICPC competitions. Passionate about building reliable systems and continuously improving skills in cloud and AI technologies.
                </p>
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">Current Focus</h3>
                  <ul className="text-slate-300 list-disc pl-5">
                    <li>Backend system architecture</li>
                    <li>Cloud-native and serverless technologies</li>
                    <li>AI engineering and data-driven systems</li>
                    <li>Scalable distributed systems</li>
                  </ul>
                </div>
              </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-cyan-400" size={28} />
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="text-purple-400" size={28} />
                <h3 className="text-xl font-semibold">Mobile Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-400" size={28} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="text-green-400" size={28} />
                <h3 className="text-xl font-semibold">Cloud & Services</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-orange-400" size={28} />
                <h3 className="text-xl font-semibold">Search & Analytics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.data.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-pink-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-pink-400" size={28} />
                <h3 className="text-xl font-semibold">Other Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={idx} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Briefcase className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-cyan-400">{job.title}</h3>
                    <p className="text-lg text-slate-300">{job.company}</p>
                    <p className="text-sm text-slate-500">{job.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Achievements */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-400" size={28} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-400">Bachelor of Computer Science</p>
                  <p className="text-slate-300">University of Computer Studies, Yangon</p>
                  <p className="text-sm text-slate-500">2013 – 2018</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-400">Mobile App Training</p>
                  <p className="text-slate-300">Samsung Tech Institute</p>
                  <p className="text-sm text-slate-500">Android Developer Program</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-yellow-400" size={28} />
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-yellow-400">First to Solve Problem K</p>
                    <p className="text-slate-300">ACM-ICPC Asia-Yangon Regional Programming Contest</p>
                    <p className="text-sm text-slate-500">2017</p>
                  </div>

                  <div>
                    <p className="font-semibold text-yellow-400">Qualified Participant</p>
                    <p className="text-slate-300">ACM-ICPC Asia-Yangon National Programming Contest</p>
                    <p className="text-sm text-slate-500">2016</p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L20 6V18L12 22L4 18V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-purple-400">Ultimate AWS Certified Cloud Practitioner CLF-C02</p>
                      <p className="text-slate-300">Udemy — Issued Jan 2026</p>
                      <a href="https://www.udemy.com/certificate/UC-891e36c8-c14e-4946-a34c-89aeed7e5013/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-sm font-medium">
                        Show credential
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-3xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</h2>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
            <p className="text-xl text-slate-300 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:lk.htetnaungnaung@gmail.com" className="flex items-center justify-center gap-3 text-lg hover:text-cyan-400 transition-colors">
                <Mail className="text-cyan-400" />
                <span>lk.htetnaungnaung@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/htet-naung-naung-68a1551b1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg hover:text-cyan-400 transition-colors">
                <Linkedin className="text-cyan-400" />
                <span>linkedin.com/in/htet-naung-naung-68a1551b1</span>
              </a>
              <div className="flex items-center justify-center gap-3 text-lg">
                <MapPin className="text-cyan-400" />
                <span>Da Nang, Vietnam / Yangon, Myanmar</span>
              </div>
            </div>

            <a href="mailto:lk.htetnaungnaung@gmail.com" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Htet Naung Naung (Nathan). Built with React & Tailwind CSS.</p>
      </footer>

      {/* Floating CTAs removed */}
    </div>
  );
}
 