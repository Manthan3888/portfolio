import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manthan Rajani - AI Full Stack Engineer",
  description:
    "AI Full Stack Engineer building agentic workflows, RAG pipelines, predictive ML and production-grade Next.js / FastAPI applications end-to-end.",
  keywords: [
    "Manthan Rajani",
    "AI Full Stack Engineer",
    "Next.js Developer",
    "FastAPI",
    "LangChain",
    "RAG",
    "Agentic AI",
    "Python",
    "React Native",
    "Surat",
  ],
  authors: [{ name: "Manthan Rajani" }],
  openGraph: {
    title: "Manthan Rajani - AI Full Stack Engineer",
    description:
      "I build AI automation, agentic systems and full-stack products that survive launch, from LLM backends to Next.js frontends.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Rajani - AI Full Stack Engineer",
    description:
      "Agentic AI, RAG pipelines and production full-stack apps. Python, FastAPI, Next.js and LangChain.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manthan Rajani",
              jobTitle: "AI Full Stack Engineer",
              email: "mailto:manthanrajani.work@gmail.com",
              telephone: "+917861918770",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surat",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              url: "https://github.com/manthanrajani",
              sameAs: [
                "https://github.com/manthanrajani",
                "https://www.linkedin.com/in/manthan-rajani",
                "https://calendly.com/manthanrajani-work/30min",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Large Language Models",
                "Retrieval Augmented Generation",
                "Next.js",
                "FastAPI",
                "Python",
                "LangChain",
                "React Native",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-ink-950 text-slate-200 antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if("scrollRestoration" in history)history.scrollRestoration="manual";var h=location.hash;if(!h||h==="#home")window.scrollTo(0,0);}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
