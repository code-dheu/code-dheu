import "./globals.css";

export const metadata = {
  title: "Code Dheu | Next-Gen Software Development & IT Agency",
  description: "Code Dheu is an enterprise-grade digital engineering and software agency building next-gen web applications, mobile platforms, enterprise cloud architectures, and AI solutions.",
  keywords: ["Code Dheu", "Software Development", "Web Development Agency", "Next.js", "AI Solutions", "Mobile Apps"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
