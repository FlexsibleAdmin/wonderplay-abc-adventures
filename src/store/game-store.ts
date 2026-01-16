import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface GameState {
  stars: number;
  unlockedLevels: string[];
  unlockedStickers: string[];
  addStar: (amount: number) => void;
  unlockLevel: (levelId: string) => void;
  unlockSticker: (stickerId: string) => void;
}
export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      stars: 0,
      unlockedLevels: ['game-1'], // First game unlocked by default
      unlockedStickers: [],
      addStar: (amount) => set((state) => ({ stars: state.stars + amount })),
      unlockLevel: (levelId) => set((state) => ({
        unlockedLevels: state.unlockedLevels.includes(levelId)
          ? state.unlockedLevels
          : [...state.unlockedLevels, levelId]
      })),
      unlockSticker: (stickerId) => set((state) => ({
        unlockedStickers: state.unlockedStickers.includes(stickerId)
          ? state.unlockedStickers
          : [...state.unlockedStickers, stickerId]
      })),
    }),
    {
      name: 'wonderplay-storage',
    }
  )
);