'use client';

import { useEffect } from 'react';
import { instaPosts } from '../data/portfolioData';

export default function PhotographySection({ sectionRef }) {
  useEffect(() => {
    const loadInstagramEmbed = () => {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    const cleanup = loadInstagramEmbed();
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} id="photography" className="mb-16">
      <h2 className="text-[2.8rem] leading-none lg:text-8xl font-bold mb-6">
        PICTURE THIS...
        <span className="text-gray-500 dark:text-zinc-500 lg:text-7xl block">
          Literally!
        </span>
      </h2>
      <p className="text-gray-500 dark:text-zinc-500 font-medium block text-xl mb-10">
        I don't just code... :P
      </p>

      <div className="overflow-x-auto scrollbar-hidden group">
        <div className="flex animate-infinite-scroll group-hover:pause gap-4 w-max">
          {/* First set of images */}
          {instaPosts.map((post, index) => (
            <div
              key={`first-${index}`}
              className="flex-none w-80 h-96 bg-gray-200 dark:bg-zinc-800 rounded-lg border border-gray-300 dark:border-zinc-700 overflow-hidden"
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
              className="flex-none w-80 h-96 bg-gray-200 dark:bg-zinc-800 rounded-lg border border-gray-300 dark:border-zinc-700 overflow-hidden"
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
  );
}
