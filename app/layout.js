import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "MemoTag - AI-Powered Dementia Care Platform",
  description: "An innovative AI platform designed to enhance the quality of life for dementia patients and support their caregivers.",
  keywords: "dementia care, AI healthcare, cognitive tracking, caregiver support",
  metadataBase: new URL("https://memotag.io"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Run this script immediately to prevent flickering
                function setTheme() {
                  const savedTheme = localStorage.getItem('theme');
                  
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    // Default to light mode
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    if (!savedTheme) {
                      localStorage.setItem('theme', 'light');
                    }
                  }
                }
                
                // Apply theme immediately
                setTheme();
                
                // Set up a listener for theme change events
                window.addEventListener('themeChange', function(e) {
                  // No need to do anything here, CSS variables handle transitions
                });
                
                // Set a listener to handle theme changes across tabs
                window.addEventListener('storage', (e) => {
                  if (e.key === 'theme') {
                    // Remember scroll position
                    const scrollPosition = window.scrollY;
                    
                    // Apply theme
                    setTheme();
                    
                    // Restore scroll position
                    window.scrollTo(0, scrollPosition);
                  }
                });
              } catch (e) {
                console.error('Dark mode initialization error:', e);
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
