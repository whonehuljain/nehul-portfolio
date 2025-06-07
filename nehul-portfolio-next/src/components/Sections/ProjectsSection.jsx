import { projects } from '../data/portfolioData';

export default function ProjectsSection({ sectionRef }) {
  return (
    <section ref={sectionRef} id="projects" className="mb-16">
      <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-bold mb-6">
        FEATURED
        <span className="text-gray-500 dark:text-zinc-500 lg:text-7xl block">
          PROJECTS
        </span>
      </h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
          >
            <div className="bg-gray-50 dark:bg-custom-bg rounded-2xl p-6 border-none dark:border-none hover:bg-gray-100 dark:hover:bg-grey-bg transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-16 h-16 rounded-[20%]"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
                <span className="text-gray-500 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
  );
}
