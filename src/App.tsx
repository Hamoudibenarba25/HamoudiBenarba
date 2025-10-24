import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education'; // This import seems unused in the provided App.tsx, but I'll leave it.
import { Services } from './components/Services';
import { Contact } from './components/Contact'; 
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTop } from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen bg-dark-950 transition-colors duration-300 dark"
    >
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Services />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
