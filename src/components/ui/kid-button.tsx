import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface KidButtonProps extends ButtonProps {
  kidVariant?: 'primary' | 'secondary' | 'accent' | 'success' | 'orange';
}
export function KidButton({ className, kidVariant = 'primary', ...props }: KidButtonProps) {
  const variants = {
    primary: "bg-kid-red hover:bg-kid-red/90 text-white border-b-red-800",
    secondary: "bg-kid-blue hover:bg-kid-blue/90 text-white border-b-teal-700",
    accent: "bg-kid-yellow hover:bg-kid-yellow/90 text-black border-b-yellow-600",
    success: "bg-kid-green hover:bg-kid-green/90 text-white border-b-emerald-600",
    orange: "bg-kid-orange hover:bg-kid-orange/90 text-white border-b-orange-700",
  };
  return (
    <Button
      className={cn(
        "rounded-2xl border-b-4 active:border-b-0 active:translate-y-1 transition-all font-kid text-xl py-6 px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:shadow-none",
        variants[kidVariant],
        className
      )}
      {...props}
    />
  );
}