import React, { useEffect } from 'react';
import { Home, Briefcase, Code, Settings, Camera, Mail,  Layers, Box, ArrowRight, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Portfolio = () => {
  // Navigation links with icons
  const navLinks = [
    { title: 'Home', href: '#home', icon: <Home size={20} /> },
    { title: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
    { title: 'Projects', href: '#projects', icon: <Code size={20} /> },
    { title: 'Skills', href: '#skills', icon: <Settings size={20} /> },
    { title: 'Photography', href: '#photography', icon: <Camera size={20} /> },
    { title: 'Contact', href: '#contact', icon: <Mail size={20} /> }
  ];

  // Rest of the component remains the same
  const projects = [
    {
      title: 'Robotic Arm RL',
      description: 'Making a robotic arm stand and balance at 90 degrees using Reinforcement Learning',
      image: '/api/placeholder/64/64',
      link: 'https://github.com/whonehuljain/roboticArm_RL'
    },
    {
      title: 'Fnalyze',
      description: 'Predicting Formula 1 Driver Standings with Machine Learning',
      image: '/api/placeholder/64/64',
      link: 'https://github.com/whonehuljain/F1nalyze'
    },
    {
      title: 'Babelfish.db',
      description: 'Your universal translator for human-to-database chats',
      image: '/babelfish.png',
      link: 'https://github.com/whonehuljain/Babelfish.db'
    },
    {
      title: 'MediMate',
      description: 'AI Health Assistant and Disease Prediction System',
      image: '/api/placeholder/64/64',
      link: 'https://github.com/whonehuljain/medimate'
    },
  ];

  const skills = [
    { name: 'Python', icon: '🌱' },
    { name: 'Django', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Java', icon: '☕️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' },
];


  const instaPosts = [
    "https://www.instagram.com/p/C0rTTzOvLge",
    "https://www.instagram.com/p/C-QLVRsPABH",
    "https://www.instagram.com/p/Cygda02vhuw",
    "https://www.instagram.com/p/C6mVrpRSTgI"
  ];

    // Add useEffect for Instagram embed
    useEffect(() => {
        const loadInstagramEmbed = () => {
          const script = document.createElement('script');
          script.src = '//www.instagram.com/embed.js';
          script.async = true;
          document.body.appendChild(script);

          return () => {
            document.body.removeChild(script);
          };
        };

        const cleanup = loadInstagramEmbed();
        return cleanup;
    }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-center py-4">
        <div className="bg-zinc-800 rounded-full px-6 py-2 flex gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-zinc-400 hover:text-orange-500 transition-colors"
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col lg:flex-row gap-16 mx-auto">
          {/* Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl px-4 py-12">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative mb-4">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-64 h-72 rounded-2xl object-cover"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                        🔥
                      </div>
                    </div> */}
                  </div>
                  <h1 className="text-2xl font-bold text-black mb-2">Nehul Jain</h1>
                  <p className="text-zinc-600 mb-6">
                    Tech geek turning "uh-ohs" into "wow!" - building cool stuff with a side of humor
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/whonehuljain/" className="text-zinc-400 hover:text-orange-500">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/whonehuljain" className="text-zinc-400 hover:text-orange-500">
                      <Github size={20} />
                    </a>
                    <a href="https://x.com/whonehuljain" className="text-zinc-400 hover:text-orange-500">
                      <Twitter size={20} />
                    </a>
                    <a href="https://www.instagram.com/whonehuljain" className="text-zinc-400 hover:text-orange-500">
                      <Instagram size={20} />
                    </a>
                    <a href="mailto:work.nehul@gmail.com" className="text-zinc-400 hover:text-orange-500">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3 lg:pl-10">
            {/* Hero Section */}
            <section id="home" className="mb-16">
              <h1 className="text-9xl font-extrabold mb-6">
                Hi! I'm Nehul
                <span className="text-zinc-500 block text-7xl mt-2">Curiosity is My Jam!</span>
              </h1>
              <p className="text-zinc-400 text-2xl text-justify">
                Turning wild ideas into tech that works (most of the time). <br />
                I take problems that make you go "huh?" and turn them into software so smooth, you'll wonder if it's magic—or just my coffee addiction talking!
              </p>
            </section>
        
              {/* Cards Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Professional Plot Twists Card */}
          <a href="#experience">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-transparent rounded-3xl opacity-50">
              <div className="absolute inset-0" 
                style={{
                  background: "url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 100 C 150 50, 250 50, 300 100 C 350 150, 350 250, 300 300 C 250 350, 150 350, 100 300 C 50 250, 50 150, 100 100' fill='none' stroke='%23ff5722' stroke-width='2' opacity='0.2'/%3E%3C/svg%3E\")",
                  backgroundSize: 'cover'
                }}
              />
            </div>
            <div className="relative bg-orange-500 rounded-3xl p-8 transition-transform duration-300 group-hover:-translate-y-1">
              <Layers className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">PROFESSIONAL<br />PLOT TWISTS</h3>
              <ArrowRight className="absolute bottom-8 right-8 w-6 h-6 text-white" />
            </div>
          </div>
          </a>

          {/* Tech Stack Card */}
          <a href="#skills">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 to-transparent rounded-3xl opacity-50">
              <div className="absolute inset-0" 
                style={{
                  background: "url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 50 200 L 150 100 L 250 200 L 350 100' fill='none' stroke='%2384cc16' stroke-width='2' opacity='0.2'/%3E%3C/svg%3E\")",
                  backgroundSize: 'cover'
                }}
              />
            </div>
            <div className="relative bg-lime-400 rounded-3xl p-8 transition-transform duration-300 group-hover:-translate-y-1">
              <Box className="w-12 h-12 mb-4 text-zinc-900" />
              <h3 className="text-2xl font-bold text-zinc-900">Python, Java, TensorFlow,<br />AWS, Flutter...</h3>
              <ArrowRight className="absolute bottom-8 right-8 w-6 h-6 text-zinc-900" />
            </div>
          </div>
          </a>
        </div>
      </section>
            

            {/* Experience Section */}
            <section id="experience" className="mb-16">
              <h2 className="text-8xl font-extrabold mb-6">
                PROFESSIONAL
                <span className="text-zinc-500 text-7xl block">PLOT TWISTS</span>
              </h2>
              
              <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
                <a href="https://upsurge.io"><h3 className="text-xl font-semibold mb-2">Upsurge Labs</h3></a>
                <p className="text-zinc-400">
                  - Teamed up to build Cosmo, an AI super-app that's basically a tech wizard. <br />
                  - Worked on internal APIs to make things scale like a pro and free-tuned machine learning operations.
                </p>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16">
              <h2 className="text-8xl font-extrabold mb-6">
                FEATURED
                <span className="text-zinc-500 text-7xl block">PROJECTS</span>
              </h2>
              <div className="grid gap-4">
                {projects.map((project) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div 
                    key={project.title} 
                    className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-orange-500 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-16 h-16 rounded"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-zinc-400">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-16">
              <h2 className="text-8xl font-extrabold mb-6">
                MY SKILLS &
                <span className="text-zinc-500 text-7xl block">TOOLKIT</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="bg-zinc-800 rounded-lg p-4 border border-zinc-700 text-center hover:border-orange-500 transition-colors"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="font-medium">{skill.name}</div>
                  </div>
                ))}
              </div>
            </section>


            {/* Photography Section */}
            <section id="photography" className="mb-16">
      <h2 className="text-8xl font-extrabold mb-6">
        PICTURE THIS...
        <span className="text-zinc-500 text-7xl block">Literally!</span>
      </h2>
      <p className="text-zinc-500 block text-2xl mb-10">I don't just code... :P</p>
      
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll gap-4 hover:pause">
          {/* First set of images */}
          {instaPosts.map((post, index) => (
            <div key={`first-${index}`} className="flex-none aspect-square w-80 h-96 bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden">
              <div className="w-full h-full flex justify-center">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink={`${post}/?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '12px',
                    margin: '0',
                    padding: '0',
                    maxWidth: '540px',
                    minWidth: '326px',
                    width: 'calc(100% - 2px)',
                  }}
                />
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {instaPosts.map((post, index) => (
            <div key={`second-${index}`} className="flex-none aspect-square w-80 h-96 bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden">
              <div className="w-full h-full flex justify-center">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink={`${post}/?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '12px',
                    margin: '0',
                    padding: '0',
                    maxWidth: '540px',
                    minWidth: '326px',
                    width: 'calc(100% - 2px)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16">
              <div className="bg-zinc-800 rounded-3xl p-8">
                <div className="lg:flex flex-col items-center justify-center gap-8">
                  {/* <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <div className="relative">
                      <img
                        src="/api/placeholder/256/256"
                        alt="Profile"
                        className="w-full rounded-2xl mb-4"
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                        <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                          🔥
                        </div>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Nehul Jain</h2>
                    <p className="text-zinc-400">
                      Tech geek turning "uh-ohs" into "wow!" - building cool stuff with a side of humor
                    </p>
                  </div> */}
                  <div className="lg:w-2/3">
                    <h2 className="text-7xl font-extrabold mb-4">
                      LET'S WORK
                      <span className="text-zinc-500 text-6xl block">TOGETHER</span>
                    </h2>
                    <p className="text-zinc-400 text-xl mb-6">
                      Let's catch up for a coffee? ☕️ (virtually probably?)
                    </p>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-zinc-400">Name</label>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-zinc-400">Email</label>
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-zinc-700 rounded-lg px-4 py-2 mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-zinc-400">Message</label>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="w-full bg-zinc-700 rounded-lg px-4 py-2 mt-1"
                        />
                      </div>
                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-colors">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-zinc-400">
        Made with ❤️ by Nehul
      </footer>
    </div>
  );
};

export default Portfolio;