import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import CustomCursor from './components/CustomCursor/CustomCursor'
import AnimateOnScroll from './components/AnimateOnScroll/AnimateOnScroll'
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation'

const Hero = lazy(() => import('./components/Hero/Hero'))
const About = lazy(() => import('./components/About/About'))
const Cards = lazy(() => import('./components/Cards/Cards'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const VideoSection = lazy(() => import('./components/VideoSection/VideoSection'))
const Awards = lazy(() => import('./components/Awards/Awards'))

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className={isModalOpen ? 'no-scroll' : ''}>
      <CustomCursor />
      <Suspense fallback={<LoadingAnimation />}>
        <Hero />
        <About />
        <VideoSection onModalOpen={handleModalOpen} onModalClose={handleModalClose} />
        <Cards />
        <Awards />
        <Contact />
      </Suspense>
    </div>
  )
}

export default App