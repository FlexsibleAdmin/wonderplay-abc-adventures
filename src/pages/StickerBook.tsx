import React from 'react';
import { motion } from 'framer-motion';
import { Star, Lock } from 'lucide-react';
import { useGameStore } from '@/store/game-store';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { KidButton } from '@/components/ui/kid-button';
export function StickerBook() {
  const navigate = useNavigate();
  const unlockedStickers = useGameStore(s => s.unlockedStickers);
  // Mock sticker data
  const stickers = Array.from({ length: 12 }).map((_, i) => ({
    id: `sticker-${i + 1}`,
    name: `Sticker ${i + 1}`,
    // In a real app, these would be image URLs
    emoji: ['🦁', '🐘', '🦒', '🦓', '🐵', '🐯', '🐨', '🐼', '🐸', '🐙', '🦄', '🦖'][i]
  }));
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-kid-blue">My Sticker Book</h2>
        <KidButton kidVariant="secondary" onClick={() => navigate('/map')} className="text-sm py-2 px-4">
          Back to Map
        </KidButton>
      </div>
      <div className="bg-white rounded-[3rem] p-8 shadow-xl border-4 border-sky-100 min-h-[60vh]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {stickers.map((sticker, index) => {
            const isUnlocked = unlockedStickers.includes(sticker.id) || index < 3; // Mock: first 3 unlocked
            return (
              <motion.div
                key={sticker.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "aspect-square rounded-3xl flex items-center justify-center text-6xl relative border-4 border-dashed",
                  isUnlocked 
                    ? "bg-yellow-50 border-kid-yellow shadow-inner" 
                    : "bg-gray-50 border-gray-200"
                )}
              >
                {isUnlocked ? (
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="cursor-pointer drop-shadow-md"
                  >
                    {sticker.emoji}
                  </motion.div>
                ) : (
                  <Lock className="text-gray-200 w-12 h-12" />
                )}
                {!isUnlocked && (
                  <div className="absolute bottom-2 right-2">
                    <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}