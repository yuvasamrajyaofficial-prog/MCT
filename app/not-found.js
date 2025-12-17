"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="mb-8 inline-block p-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <Compass size={64} className="text-amber-500" />
        </motion.div>

        <h1 className="text-8xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          404
        </h1>
        
        <h2 className="text-3xl font-semibold mb-6 text-amber-500">
          Lost in the Digital Void
        </h2>
        
        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          The coordinates you are looking for seem to have drifted into the unknown. 
          Even in the vastness of the digital universe, some paths remain undiscovered.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <Home size={20} />
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
}
