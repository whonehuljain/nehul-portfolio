import { Download } from 'lucide-react';
import { resumeUrl } from '../data/portfolioData';

export default function ResumeSection({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      id="resume"
      className="min-h-fit flex flex-col px-4 py-8 mb-16 lg:py-16 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-5xl text-center lg:text-8xl lg:text-left font-bold">
          RESUME
        </h2>
        <p className="text-gray-500 dark:text-zinc-500 text-xl font-medium mt-2 text-center lg:text-left">
          A movie (starring me :P)
        </p>
      </div>

      <div className="flex-grow flex flex-col items-center lg:items-start">
        {/* Download Button */}
        <div className="mb-4 text-center lg:text-left">
          <a
            href={"/Nehul_Jain_Resume.pdf"}
            download="Nehul_Jain_Resume.pdf"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full max-w-4xl h-[49vh] lg:h-[60vh] bg-gray-100 dark:bg-zinc-900 rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-800">
          <iframe
            src={resumeUrl}
            title="Nehul's resume"
            className="w-full h-full"
            style={{
              border: "none",
            }}
          >
            <p className="text-red-500">
              Sorry, could not load the resume. Please download the PDF!
              <a href={resumeUrl} className="text-orange-500 ml-2">
                Download PDF
              </a>
            </p>
          </iframe>
        </div>
      </div>
    </section>
  );
}
