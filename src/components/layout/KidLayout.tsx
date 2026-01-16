import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Star, Map, Book } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game-store";
export function KidLayout() {
  const stars = useGameStore(s => s.stars);
  const location = useLocation();
  return (
    <div className="min-h-screen bg-sky-100 overflow-x-hidden font-kid selection:bg-kid-yellow selection:text-black">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/40 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-kid-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      {/* Navigation Pill */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm border-2 border-white/50 shadow-soft rounded-full px-2 py-2 flex items-center gap-2 sm:gap-4">
        <Link to="/map">
           <div className={cn("p-3 rounded-full transition-colors hover:bg-sky-100", location.pathname === '/map' ? "bg-sky-100 text-kid-blue" : "text-gray-500")}>
             <Map className="w-6 h-6 sm:w-8 sm:h-8" />
           </div>
        </Link>
        <Link to="/stickers">
           <div className={cn("p-3 rounded-full transition-colors hover:bg-sky-100", location.pathname === '/stickers' ? "bg-sky-100 text-kid-blue" : "text-gray-500")}>
             <Book className="w-6 h-6 sm:w-8 sm:h-8" />
           </div>
        </Link>
        <div className="w-px h-8 bg-gray-200 mx-1" />
        <div className="flex items-center gap-1 px-3 py-1 bg-kid-yellow/20 rounded-full border border-kid-yellow/50">
          <Star className="w-5 h-5 text-kid-yellow fill-kid-yellow" />
          <span className="font-bold text-lg text-orange-600">{stars}</span>
        </div>
      </nav>
      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-6rem)]">
        <Outlet />
      </main>
    </div>
  );
}