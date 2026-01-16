import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { KidButton } from '@/components/ui/kid-button';
import { ArrowLeft, Construction } from 'lucide-react';
export function GameArena() {
  const { id } = useParams();
  const navigate = useNavigate();
  const gameTitles: Record<string, string> = {
    'letter-launch': 'Letter Launch',
    'phonics-pop': 'Phonics Pop',
    'word-builder': 'Word Builder'
  };
  const title = id ? gameTitles[id] : 'Unknown Game';
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <div className="bg-white p-12 rounded-[3rem] shadow-xl border-b-8 border-gray-200 max-w-2xl w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-kid-yellow/20 p-6 rounded-full">
            <Construction className="w-16 h-16 text-kid-orange" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-kid-blue mb-4">{title}</h1>
        <p className="text-xl text-gray-500 mb-8">
          This game is currently under construction by our magical elves!
          Check back soon for some fun.
        </p>
        <KidButton 
          kidVariant="primary" 
          onClick={() => navigate('/map')}
          className="w-full sm:w-auto"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Map
        </KidButton>
      </div>
    </div>
  );
}