import Navbar from './components/Navbar'; // Adjust the path if necessary
import Footer from './components/Footer';
import { ReactNode } from 'react';
    import './globals.css'; // Ensure your global styles are imported

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>UIX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark:bg-gray-900"> {/* Tailwind classes for dark mode */}
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}
