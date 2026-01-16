import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Star, Cloud } from 'lucide-react';
import { KidButton } from '@/components/ui/kid-button';
export function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-100 flex flex-col items-center justify-center relative overflow-hidden font-kid">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-white/60"
      >
        <Cloud size={120} fill="currentColor" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 text-white/50"
      >
        <Cloud size={160} fill="currentColor" />
      </motion.div>
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center space-y-12 p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)] tracking-wide">
            Wonder<span className="text-kid-yellow">Play</span>
          </h1>
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-2 inline-block">
            <p className="text-2xl md:text-3xl text-white font-bold tracking-wider">ABC ADVENTURES</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <KidButton 
            kidVariant="primary" 
            className="text-3xl px-12 py-8 rounded-full border-b-8"
            onClick={() => navigate('/map')}
          >
            <Play className="mr-4 w-8 h-8 fill-current" />
            PLAY NOW
          </KidButton>
        </motion.div>
      </div>
      {/* Decorative Footer */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-kid-green fill-current">
          <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}