# WonderPlay: ABC Adventures

[aureliabutton]

**WonderPlay: ABC Adventures** is a delightful, interactive educational gaming platform designed for children to learn the alphabet and basic vocabulary through play. The application features a collection of mini-games centered around letter recognition, phonics, and simple word formation, all wrapped in a vibrant, "Kid Playful" visual style.

## 🌟 Project Overview

This project is built as a modern, high-performance web application using React, Cloudflare Workers, and Durable Objects. It emphasizes visual excellence, smooth animations, and a local-first architecture with eventual consistency for progress tracking.

### Core Features

*   **The Playground (Home):** A vibrant, animated dashboard with a treasure map progress tracker.
*   **Letter Launch:** A physics-based game for learning upper/lowercase association.
*   **Phonics Pop:** A bubble-popping game for sound and letter recognition.
*   **Word Builder:** A drag-and-drop puzzle for spelling simple CVC words.
*   **Sticker Book:** A reward system where children earn collectible stickers.
*   **Kid-Friendly UI:** Chunky buttons, bright colors, and bouncy animations designed specifically for young learners.

## 🛠️ Technology Stack

This project leverages a cutting-edge stack optimized for performance and scalability on the edge.

*   **Frontend:**
    *   React 18
    *   Vite
    *   Tailwind CSS (v3)
    *   Shadcn UI (Radix Primitives)
    *   Framer Motion (Animations)
    *   Zustand (State Management)
    *   Lucide React (Icons)
    *   React Router DOM

*   **Backend & Infrastructure:**
    *   Cloudflare Workers
    *   Cloudflare Durable Objects (State & Persistence)
    *   Hono (Edge Web Framework)
    *   TypeScript

## 🚀 Getting Started

### Prerequisites

*   **Bun:** This project uses `bun` for package management and script execution.
*   **Node.js:** Required for some build tools.
*   **Wrangler:** The Cloudflare Developer Platform command-line tool (installed via devDependencies).

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd wonderplay-abc-adventures
    ```

2.  Install dependencies:
    ```bash
    bun install
    ```

3.  Run the bootstrap script (first time only):
    ```bash
    bun run prepare
    ```

### Development

To start the development server with hot reload:

```bash
bun run dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

### Building for Production

To build the application for deployment:

```bash
bun run build
```

## ☁️ Deployment

This project is designed to be deployed to Cloudflare Workers.

[aureliabutton]

### Manual Deployment

1.  Authenticate with Cloudflare:
    ```bash
    npx wrangler login
    ```

2.  Deploy the worker and static assets:
    ```bash
    bun run deploy
    ```

## 📂 Project Structure

*   `src/`: Frontend source code (React components, pages, hooks).
    *   `components/ui/`: Reusable UI components (Shadcn).
    *   `pages/`: Application views (Playground, Games, Sticker Book).
    *   `lib/`: Utilities and API clients.
*   `worker/`: Backend source code.
    *   `index.ts`: Worker entry point.
    *   `entities.ts`: Durable Object definitions (User, Game State).
    *   `user-routes.ts`: API route definitions.
*   `shared/`: Shared types and constants between frontend and backend.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.