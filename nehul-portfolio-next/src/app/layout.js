import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Nehul Jain',
  description: 'Curiosity-driven developer specializing in machine learning, backend development, and cloud technologies. Building innovative solutions with Python, GoLang, and modern web frameworks.',
  keywords: ['Nehul Jain', 'Full Stack Developer', 'Backend Developer', 'Machine Learning', 'Python', 'GoLang', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Nehul Jain', url: 'https://github.com/whonehuljain' }],
  creator: 'Nehul Jain',
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nehul.vercel.app/', // Replace with your actual domain
    siteName: 'Nehul Jain Portfolio',
    title: 'Nehul Jain',
    description: 'Curiosity-driven developer specializing in machine learning, backend development, and cloud technologies. Currently building innovative solutions at Grafieks.',
    // images: [
    //   {
    //     url: 'https://your-portfolio-domain.com/og-image.png', // We'll create this
    //     width: 1200,
    //     height: 630,
    //     alt: 'Nehul Jain - Full Stack Developer Portfolio',
    //     type: 'image/png',
    //   }
    // ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@whonehuljain', // Your Twitter handle
    creator: '@whonehuljain',
    title: 'Nehul Jain',
    description: 'Curiosity-driven developer specializing in machine learning, backend development, and cloud technologies.',
    // images: ['https://your-portfolio-domain.com/og-image.png'],
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification for search engines
  // verification: {
  //   google: 'your-google-verification-code', // Add when you verify with Google
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#FA651E" />
        <meta name="msapplication-TileColor" content="#FA651E" />
        <link rel="canonical" href="https://nehul.vercel.app/" />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
