import { ArrowRight } from 'lucide-react';

export default function ProfileCardBack() {
  return (
    <div
      className="absolute top-0 w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-slate-900 dark:to-purple-900 rounded-2xl px-4 py-6 shadow-2xl"
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg) translateZ(0px)",
      }}
    >
      <div className="flex flex-col h-full text-white">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Behind the Code
        </h2>

        {/* Current Status */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Currently...</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-blue-200 dark:text-indigo-200">Reading:</span>
              <span className="text-white">The Sentinel</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-blue-200 dark:text-indigo-200">Learning:</span>
              <span className="text-white">Embedded C for Robotics</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-blue-200 dark:text-indigo-200">Building:</span>
              <span className="text-white">Something Cool 🤫</span>
            </div>
          </div>
        </div>

        {/* Quote of the Day */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="flex items-start gap-2">
            <span className="text-3xl text-blue-300 dark:text-indigo-300">❝</span>
            <div>
              <p className="text-sm italic text-blue-100 dark:text-indigo-100">
                Can't complain about how much is on my plate when the goal was to eat! 
              </p>
              <p className="text-xs text-blue-300 dark:text-indigo-300 mt-1">~ Unknown (probably me)</p>
            </div>
          </div>
        </div>

        {/* Music Section */}
        <div className="mt-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl pt-3 px-0">
            <div className="flex items-center gap-2 mb-2 pl-3">
              <span>🎵</span>
              <h3 className="text-sm font-medium">Music gets me going...</h3>
            </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/4sJkkhN7A94nrnlyBiNPzu"
              width="100%"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
              className="rounded-lg"
              title="whispered confessions playlist"
            ></iframe>
          </div>
        </div>

        {/* Flip Back Indicator */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-blue-200 dark:text-indigo-200">
          <ArrowRight size={14} className="rotate-180" />
          <span>Flip back to professional mode :p</span>
        </div>
      </div>
    </div>
  );
}
