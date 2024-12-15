import React, { useEffect, useRef } from "react";
import {
  Home,
  Briefcase,
  Code,
  Settings,
  Camera,
  Mail,
  Layers,
  Box,
  ArrowRight,
  // Download,
  Github,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Portfolio = () => {
  const sectionRefs = {
    home: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    photography: useRef(null),
    contact: useRef(null),
  };

  // Improved smooth scroll function
  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      // Use behavior: 'smooth' and additional options for better scrolling
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // Navigation links with icons
  const navLinks = [
    {
      title: "Home",
      href: "#home",
      icon: <Home size={20} />,
      ref: sectionRefs.home,
    },
    {
      title: "Experience",
      href: "#experience",
      icon: <Briefcase size={20} />,
      ref: sectionRefs.experience,
    },
    {
      title: "Projects",
      href: "#projects",
      icon: <Code size={20} />,
      ref: sectionRefs.projects,
    },
    {
      title: "Skills",
      href: "#skills",
      icon: <Settings size={20} />,
      ref: sectionRefs.skills,
    },
    {
      title: "Photography",
      href: "#photography",
      icon: <Camera size={20} />,
      ref: sectionRefs.photography,
    },
    {
      title: "Contact",
      href: "#contact",
      icon: <Mail size={20} />,
      ref: sectionRefs.contact,
    },
  ];

  const skillTags = [
    "Machine Learning",
    "Data",
    "Cloud",
    "DevOps",
    "Mobile",
    "Web x AI",
  ];

  const experience = [
    {
      company: "Upsurge Labs - AI Engineer Intern",
      link: "https://upsurge.io",
      logo: "/company-logo/upsurge-logo.png",
      points: [
        "took cosmo (cosmoflow.ai) from an idea to internal beta, with autonomous web navigation and image element detection powered by open-source models.",
        "built seamless data pipelines and llm workflows that plugged right into cosmo’s interface.",
        "crafted rest api integrations and database microservices for lemmebuild (lemmebuild.com), a low-code paas platform designed to simplify life (and coding)",
      ],
      period: "Aug 2024 - Nov 2024",
    },
  ];

  const projects = [
    {
      title: "Robotic Arm RL",
      description:
        "Making a two-segment robotic arm stand and balance at 90 degrees in simulation using Reinforcement Learning",
      image: "/project-logo/rob.jpg",
      link: "https://github.com/whonehuljain/roboticArm_RL",
    },
    {
      title: "Babelfish.db",
      description: "Your universal translator for human-to-database chats",
      image: "/project-logo/babelfish.jpg",
      link: "https://babelfish-db.vercel.app/",
    },
    {
      title: "Fnalyze",
      description:
        "Predicting Formula 1 Driver Standings with Machine Learning",
      image: "/project-logo/f1.jpg",
      link: "https://github.com/whonehuljain/F1nalyze",
    },
    {
      title: "MediMate",
      description: "AI Health Assistant and Disease Prediction System",
      image: "/project-logo/medimate.webp",
      link: "https://github.com/whonehuljain/medimate",
    },
    {
      title: "Text-to-Animation",
      description:
        "Leveraged LLMs and 3brown1blue's python library, Manim to create captivating animations from mere prompts. Project is not public for now on github.",
      image: "/project-logo/tta.png",
      link: "https://github.com/whonehuljain/text-to-animation",
    },
  ];

  const skills = [
    {
      name: "Python",
      icon: "🐍",
      description:
        "Every coder's best friend – easy to learn, harder to put down!",
      logo: "/skill-logo/python-logo.png",
    },
    {
      name: "TensorFlow",
      icon: "🧠",
      description: "Making sure your AI has more neurons than your brain!",
      logo: "/skill-logo/tf-logo.png",
    },
    {
      name: "AWS",
      icon: "☁️",
      description: "Badal bahut important hai! ☁️",
      logo: "/skill-logo/aws-logo.png",
    },
    {
      name: "Flutter",
      icon: "📱",
      description: "What? I heard you need an Android dev!?",
      logo: "/skill-logo/flutter-logo.png",
    },
    {
      name: "Java",
      icon: "☕",
      description:
        "Something that's older than your favorite meme but still getting the job done!",
      logo: "/skill-logo/java-logo.png",
    },
    {
      name: "JavaScript",
      icon: "JS",
      description: "Coz, who needs sleep when you can have endless debugging!?",
      logo: "/skill-logo/js-logo.svg",
    },
    {
      name: "Figma",
      icon: "🎨",
      description: "Coz, Aesthetics Matter!!",
      logo: "/skill-logo/figma-logo.png",
    },
    {
      name: "Django",
      icon: "dj",
      description: "Why's there a 'D' if it's just gonna be silent?",
      logo: "/skill-logo/django-logo.png",
    },
  ];

  // const [windowWidth, setWindowWidth] = useState(0);

  // Resume PDF URL - make sure this is a publicly accessible URL
  // const resumeUrl = "/nehul_resume.pdf"; // Update with your actual PDF path

  // // Handle window resize
  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);

  //   // Set initial width
  //   handleResize();

  //   // Add event listener
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const instaPosts = [
    "https://www.instagram.com/p/C6mVrpRSTgI",
    "https://www.instagram.com/p/C0rTTzOvLge",
    "https://www.instagram.com/p/C-QLVRsPABH",
    "https://www.instagram.com/p/Cygda02vhuw",
  ];

  // const preloadPdf = () => {
  //   const link = document.createElement("link");
  //   link.rel = "preload";
  //   link.as = "object";
  //   link.href = resumeUrl;
  //   document.head.appendChild(link);
  // };

  // useEffect(() => {
  //   preloadPdf();
  // }, []);

  // Add useEffect for Instagram embed
  useEffect(() => {
    const loadInstagramEmbed = () => {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
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
    <div className="min-h-screen bg-custom-bg text-white font-poppins">
      {/* Navigation Bar */}
      <nav className="flex justify-center py-4">
        <div className="bg-grey-bg rounded-xl mt-3 px-6 py-3.5 flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.ref)}
              className="text-white hover:text-orange-500 transition-colors"
              title={link.title}
              type="button"
            >
              {link.icon}
            </button>
          ))}{" "}
          {/* <p className="text-zinc-500">|</p>
          <a
            href="#contact"
            className="text-white hover:text-orange-500 transition-colors"
          >
            {" "}
            <Camera size={20} />{" "}
          </a> */}
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
                  <div className="relative mb-3">
                    <img
                      src="/profile.png"
                      alt="Profile"
                      className="w-64 h-72 rounded-2xl object-cover"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-black mb-0">
                    Nehul Jain
                  </h1>
                  <p className="text-zinc-600 font-medium mb-5">
                    i do stuff! + figuring out my life!
                  </p>
                  <div className="flex space-x-8">
                    <a
                      href="https://www.linkedin.com/in/whonehuljain/"
                      className="text-orange-500 hover:text-zinc-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/whonehuljain"
                      className="text-orange-500 hover:text-zinc-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://x.com/whonehuljain"
                      className="text-orange-500 hover:text-zinc-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/whonehuljain"
                      className="text-orange-500 hover:text-zinc-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="mailto:work.nehul@gmail.com"
                      className="text-orange-500 hover:text-zinc-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                  <div className="mt-6 flex flex-wrap justify-center gap-2 px-4">
                    {skillTags.map((skill) => (
                      <span
                        key={skill}
                        className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3 lg:pl-4">
            {/* Hero Section */}
            <section ref={sectionRefs.home} id="home" className="mb-16">
              <h1 className="text-5xl text-center lg:text-[7.5rem] lg:text-left font-extrabold mb-6">
                Hi! I'm Nehul
                <span className="text-3xl text-center text-zinc-500 block lg:leading-[4.5rem] lg:text-[4.6rem] lg:text-left mt-2">
                  Curiosity is My Jam!
                </span>
              </h1>
              <p className="text-zinc-400 text-base lg:md:text-xl max-w-3xl text-center lg:text-left px-4 lg:p-0">
                I make machines think, drink too much coffee, and pretend i have
                my life together. curiosity is my fuel, and i turn “what ifs”
                into “nailed it!” (most of the time). powered by bad jokes, big
                ideas, and way too much caffeine.
              </p>
            </section>

            {/* Cards Section */}
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Professional Plot Twists Card */}
                <button type="button" style={{ all: "unset" }}>
                  <div
                    onClick={() => scrollToSection(sectionRefs.experience)}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-transparent rounded-3xl opacity-50">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 100 100 C 150 50, 250 50, 300 100 C 350 150, 350 250, 300 300 C 250 350, 150 350, 100 300 C 50 250, 50 150, 100 100' fill='none' stroke='%23ff5722' stroke-width='2' opacity='0.2'/%3E%3C/svg%3E\")",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <div className="relative bg-orange-500 rounded-3xl p-8 transition-transform duration-300 group-hover:-translate-y-1">
                      <Layers className="w-12 h-12 mb-4 text-white" />
                      <h3 className="text-2xl font-bold text-white mb-4">
                        PROFESSIONAL
                        <br />
                        PLOT TWISTS
                      </h3>
                      <ArrowRight className="absolute bottom-8 right-8 w-6 h-6 text-white" />
                    </div>
                  </div>
                </button>

                {/* Featured Projects Card */}
                <button type="button" style={{ all: "unset" }}>
                  <div
                    onClick={() => scrollToSection(sectionRefs.projects)}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 to-transparent rounded-3xl opacity-50">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 50 200 L 150 100 L 250 200 L 350 100' fill='none' stroke='%2384cc16' stroke-width='2' opacity='0.2'/%3E%3C/svg%3E\")",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <div className="relative bg-lime-400 rounded-3xl p-8 transition-transform duration-300 group-hover:-translate-y-1">
                      <Box className="w-12 h-12 mb-4 text-zinc-900" />
                      <h3 className="text-2xl font-bold text-zinc-900">
                        FEATURED PROJECTS
                        <br />
                        (the hall of fame :p)
                      </h3>
                      <ArrowRight className="absolute bottom-8 right-8 w-6 h-6 text-zinc-900" />
                    </div>
                  </div>
                </button>
              </div>
            </section>

            {/* Experience Section */}
            <section
              ref={sectionRefs.experience}
              id="experience"
              className="mb-20"
            >
              <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-extrabold mb-6">
                PROFESSIONAL
                <span className="text-zinc-500 lg:text-7xl block">
                  PLOT TWISTS
                </span>
              </h2>

              <div className="grid gap-4">
                {experience.map((exp) => (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    <div
                      key={exp.company}
                      className="bg-custom-bg rounded-2xl p-6 border border-none hover:bg-grey-bg transition-all duration-200 group relative"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-[20%] overflow-hidden flex items-center justify-center">
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                              />
                            </div>
                            <h3 className="text-2xl font-semibold">
                              {exp.company}
                            </h3>
                          </div>
                          <div className="text-zinc-400 space-y-2">
                            {exp.points.map((point, index) => (
                              <p key={index} className="flex items-start">
                                <span className="mr-2">-</span>
                                <span>{point}</span>
                              </p>
                            ))}
                          </div>
                          {exp.period && (
                            <p className="text-zinc-500 mt-4 text-sm">
                              {exp.period}
                            </p>
                          )}
                        </div>
                        <span className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="rotate-45"
                          >
                            <path
                              d="M2.66669 13.3333L13.3334 2.66666M13.3334 2.66666H5.33335M13.3334 2.66666V10.6667"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section ref={sectionRefs.projects} id="projects" className="mb-16">
              <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-extrabold mb-6">
                FEATURED
                <span className="text-zinc-500 lg:text-7xl block">
                  PROJECTS
                </span>
              </h2>
              <div className="grid gap-4">
                {projects.map((project) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      key={project.title}
                      className="bg-custom-bg rounded-2xl p-6 border border-none hover:bg-grey-bg transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-16 h-16 rounded-[20%]"
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                        <div>
                          <h3 className="text-xl font-semibold">
                            {project.title}
                          </h3>
                          <p className="text-zinc-400">{project.description}</p>
                        </div>
                        <span className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="rotate-45"
                          >
                            <path
                              d="M2.66669 13.3333L13.3334 2.66666M13.3334 2.66666H5.33335M13.3334 2.66666V10.6667"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section
              ref={sectionRefs.skills}
              id="skills"
              className="mb-16 px-4"
            >
              <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-extrabold mb-12">
                MY SKILLS &
                <span className="text-zinc-500 lg:text-7xl block">
                  TOOLKIT
                  <span className="inline-block ml-2"> 🛠️</span>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 bg-zinc-900/50 rounded-xl p-4 hover:bg-zinc-800/50 transition-all duration-300 group"
                  >
                    {/* Logo Section */}
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-xl mb-1 group-hover:text-orange-500 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resume Section */}
            {/* <section
  id="resume"
  className="min-h-fit flex flex-col px-4 py-8 lg:py-16 max-w-6xl mx-auto"
> */}
            {/* Header */}
            {/* <div className="mb-6">
    <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-extrabold">
      RESUME
    </h2>
    <p className="text-zinc-500 text-xl lg:text-3xl mt-2 text-center lg:text-left">
      A movie (starring me :P)
    </p>
  </div>

  <div className="flex-grow flex flex-col items-center"> */}
            {/* Download Button */}
            {/* <div className="mb-4 text-center lg:text-left">
      <a
        href={resumeUrl}
        download="Nehul_Jain_Resume.pdf"
        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
      >
        <Download className="w-4 h-4" />
        Download Resume
      </a>
    </div> */}

            {/* PDF Viewer Container */}
            {/* <div className="w-full max-w-4xl h-[70vh] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
      <iframe
        src={resumeUrl}
        title="Resume PDF"
        className="w-full h-full"
        style={{
          border: 'none',
        }}
      >
        <p className="text-red-500">
          Your browser does not support iframes.
          <a href={resumeUrl} className="text-orange-500 ml-2">
            Download PDF
          </a>
        </p>
      </iframe>
    </div>
  </div>
</section> */}

            {/* Photography Section */}
            <section
              ref={sectionRefs.photography}
              id="photography"
              className="mb-16"
            >
              <h2 className="text-[2.8rem] leading-none lg:text-8xl font-extrabold mb-6">
                PICTURE THIS...
                <span className="text-zinc-500 lg:text-7xl block">
                  Literally!
                </span>
              </h2>
              <p className="text-zinc-500 font-medium block text-xl mb-10">
                I don't just code... :P
              </p>

              <div className="overflow-hidden relative">
                <div className="flex animate-scroll gap-4 hover:pause">
                  {/* First set of images */}
                  {instaPosts.map((post, index) => (
                    <div
                      key={`first-${index}`}
                      className="flex-none aspect-square w-80 h-96 bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden"
                    >
                      <div className="w-full h-full flex justify-center">
                        <blockquote
                          className="instagram-media"
                          data-instgrm-captioned
                          data-instgrm-permalink={`${post}/?utm_source=ig_embed&utm_campaign=loading`}
                          data-instgrm-version="14"
                          style={{
                            background: "#FFF",
                            border: "0",
                            borderRadius: "12px",
                            margin: "0",
                            padding: "0",
                            maxWidth: "540px",
                            minWidth: "326px",
                            width: "calc(100% - 2px)",
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {instaPosts.map((post, index) => (
                    <div
                      key={`second-${index}`}
                      className="flex-none aspect-square w-80 h-96 bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden"
                    >
                      <div className="w-full h-full flex justify-center">
                        <blockquote
                          className="instagram-media"
                          data-instgrm-captioned
                          data-instgrm-permalink={`${post}/?utm_source=ig_embed&utm_campaign=loading`}
                          data-instgrm-version="14"
                          style={{
                            background: "#FFF",
                            border: "0",
                            borderRadius: "12px",
                            margin: "0",
                            padding: "0",
                            maxWidth: "540px",
                            minWidth: "326px",
                            width: "calc(100% - 2px)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section ref={sectionRefs.contact} id="contact" className="mb-16">
              <div className="bg-custom-bg rounded-3xl">
                <div className="lg:flex items-center justify-center gap-8 px-0">
                  <div>
                    <h2 className="text-5xl lg:text-8xl font-extrabold mb-4">
                      LET'S WORK
                      <span className="text-zinc-500 lg:text-7xl block">
                        TOGETHER
                      </span>
                    </h2>
                    <p className="text-zinc-500 font-medium text-xl mb-6">
                      Let's catch up for a coffee? ☕️ (virtually probably?)
                    </p>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-zinc-500">Name</label>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-form-bg rounded-lg px-4 py-2 mt-1 placeholder-zinc-400"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-zinc-500">Email</label>
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-form-bg rounded-lg px-4 py-2 mt-1 placeholder-zinc-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-zinc-500">Message</label>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="w-full bg-form-bg rounded-lg px-4 py-2 mt-1 placeholder-zinc-400"
                        />
                      </div>
                      <button className="w-full bg-custom-orange hover:bg-orange-600 text-white py-3 rounded-lg transition-colors">
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
      <footer className="border-t border-zinc-800 py-6 text-center text-zinc-500">
        Made with ❤️ by Nehul
      </footer>
    </div>
  );
};

export default Portfolio;
