import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';

export function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950"
        >
          <BlurText
            text="Dr. Hamoudi"
            delay={150}
            className="mb-12 font-playfair text-5xl font-bold text-white"
            animateBy="words"
          />
          <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
          </div>
          <style>{`
            @keyframes square-animation {
              0% {
                left: 0;
                top: 0;
              }
              10.5% {
                left: 0;
                top: 0;
              }
              12.5% {
                left: 32px;
                top: 0;
              }
              23% {
                left: 32px;
                top: 0;
              }
              25% {
                left: 64px;
                top: 0;
              }
              35.5% {
                left: 64px;
                top: 0;
              }
              37.5% {
                left: 64px;
                top: 32px;
              }
              48% {
                left: 64px;
                top: 32px;
              }
              50% {
                left: 32px;
                top: 32px;
              }
              60.5% {
                left: 32px;
                top: 32px;
              }
              62.5% {
                left: 32px;
                top: 64px;
              }
              73% {
                left: 32px;
                top: 64px;
              }
              75% {
                left: 0;
                top: 64px;
              }
              85.5% {
                left: 0;
                top: 64px;
              }
              87.5% {
                left: 0;
                top: 32px;
              }
              98% {
                left: 0;
                top: 32px;
              }
              100% {
                left: 0;
                top: 0;
              }
            }

            .loader {
              position: relative;
              width: 96px;
              height: 96px;
              transform: rotate(45deg);
            }

            .loader-square {
              position: absolute;
              top: 0;
              left: 0;
              width: 28px;
              height: 28px;
              margin: 2px;
              border-radius: 0px;
              background: white;
              animation: square-animation 10s ease-in-out infinite both;
            }

            .loader-square:nth-of-type(1) { animation-delay: -1.4285714286s; }
            .loader-square:nth-of-type(2) { animation-delay: -2.8571428571s; }
            .loader-square:nth-of-type(3) { animation-delay: -4.2857142857s; }
            .loader-square:nth-of-type(4) { animation-delay: -5.7142857143s; }
            .loader-square:nth-of-type(5) { animation-delay: -7.1428571429s; }
            .loader-square:nth-of-type(6) { animation-delay: -8.5714285714s; }
            .loader-square:nth-of-type(7) { animation-delay: -10s; }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}