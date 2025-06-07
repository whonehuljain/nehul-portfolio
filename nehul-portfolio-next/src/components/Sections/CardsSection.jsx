import { Layers, Box, ArrowRight } from 'lucide-react';

export default function CardsSection({ scrollToSection, sectionRefs }) {
  return (
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
  );
}
