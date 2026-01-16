import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Music, Type, Lock } from 'lucide-react';
import { useGameStore } from '@/store/game-store';
import { cn } from '@/lib/utils';
interface GameNodeProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
  isLocked?: boolean;
  onClick: () => void;
}
function GameNode({ id, title, icon, color, delay, isLocked, onClick }: GameNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      whileHover={!isLocked ? { scale: 1.05, rotate: [0, -2, 2, 0] } : {}}
      className="relative group"
    >
      <button
        onClick={onClick}
        disabled={isLocked}
        className={cn(
          "w-64 h-64 rounded-[3rem] flex flex-col items-center justify-center gap-4 shadow-xl border-b-8 transition-all relative overflow-hidden",
          isLocked ? "bg-gray-200 border-gray-300 cursor-not-allowed" : `${color} border-black/10`
        )}
      >
        {isLocked && (
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center z-10">
            <Lock className="w-16 h-16 text-gray-400" />
          </div>
        )}
        <div className={cn(
          "p-6 rounded-full bg-white/20 backdrop-blur-sm text-white",
          isLocked && "opacity-50"
        )}>
          {icon}
        </div>
        <h3 className={cn(
          "text-2xl font-bold text-white text-center px-4",
          isLocked && "text-gray-400"
        )}>
          {title}
        </h3>
      </button>
      {/* Bouncy decoration dots */}
      {!isLocked && (
        <>
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.3s' }} />
        </>
      )}
    </motion.div>
  );
}
export function Playground() {
  const navigate = useNavigate();
  const unlockedLevels = useGameStore(s => s.unlockedLevels);
  const games = [
    {
      id: 'game-1',
      title: 'Letter Launch',
      icon: <Rocket size={48} />,
      color: 'bg-kid-red',
      path: '/game/letter-launch'
    },
    {
      id: 'game-2',
      title: 'Phonics Pop',
      icon: <Music size={48} />,
      color: 'bg-kid-blue',
      path: '/game/phonics-pop'
    },
    {
      id: 'game-3',
      title: 'Word Builder',
      icon: <Type size={48} />,
      color: 'bg-kid-orange',
      path: '/game/word-builder'
    }
  ];
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-kid-blue drop-shadow-sm">
          Choose Your Adventure!
        </h2>
        <p className="text-xl text-gray-500 mt-2">Pick a game to start learning</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {games.map((game, index) => (
          <GameNode
            key={game.id}
            id={game.id}
            title={game.title}
            icon={game.icon}
            color={game.color}
            delay={index * 0.2}
            isLocked={!unlockedLevels.includes(game.id)}
            onClick={() => navigate(game.path)}
          />
        ))}
      </div>
    </div>
  );
}