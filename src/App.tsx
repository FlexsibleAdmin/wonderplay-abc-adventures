import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { KidLayout } from '@/components/layout/KidLayout';
import { HomePage } from '@/pages/HomePage';
import { Playground } from '@/pages/Playground';
import { StickerBook } from '@/pages/StickerBook';
import { GameArena } from '@/pages/GameArena';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    element: <KidLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "/map",
        element: <Playground />,
      },
      {
        path: "/stickers",
        element: <StickerBook />,
      },
      {
        path: "/game/:id",
        element: <GameArena />,
      }
    ]
  }
]);
export function App() {
  return <RouterProvider router={router} />;
}