import { experience } from '../data/portfolioData';

export default function ExperienceSection({ sectionRef }) {
  return (
    <section ref={sectionRef} id="experience" className="mb-20">
      <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-bold mb-6">
        PROFESSIONAL
        <span className="text-gray-500 dark:text-zinc-500 lg:text-7xl block">
          PLOT TWISTS
        </span>
      </h2>

      <div className="grid gap-4">
        {experience.map((exp) => (
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            key={exp.company}
          >
            <div className="bg-gray-50 dark:bg-custom-bg rounded-2xl p-6 border-none dark:border-none hover:bg-gray-100 dark:hover:bg-grey-bg transition-all duration-200 group relative">
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
                    <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  </div>
                  <div className="text-gray-600 dark:text-zinc-400 space-y-2">
                    {exp.points.map((point, index) => (
                      <p key={index} className="flex items-start">
                        <span className="mr-2">-</span>
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>
                  {exp.period && (
                    <p className="text-gray-500 dark:text-zinc-500 mt-4 text-sm">
                      {exp.period}
                    </p>
                  )}
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
