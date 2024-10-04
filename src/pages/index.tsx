// pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AIAcknowledgment from '@/components/Acknowledgement';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <title>Your Name - MERN Stack Developer</title>
        <meta name="description" content="MERN Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        {/* <AIAcknowledgment/> */}
        <About />
        <Projects />
        
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
