import { skills } from '../data/portfolioData';

export default function SkillsSection({ sectionRef }) {
  return (
    <section ref={sectionRef} id="skills" className="mb-16 px-4">
      <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-bold mb-12">
        MY SKILLS &
        <span className="text-gray-500 dark:text-zinc-500 lg:text-7xl block">
          TOOLKIT
          <span className="inline-block ml-2"> 🛠️</span>
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-4 bg-gray-100 dark:bg-zinc-900/50 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-zinc-800/50 transition-all duration-300 group"
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
              <p className="text-sm text-gray-600 dark:text-zinc-400">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
