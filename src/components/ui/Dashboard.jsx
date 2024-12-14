import { motion } from 'framer-motion';
import { Scene } from '../3d/Scene';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MobileNav } from './MobileNav';

export function Dashboard() {
  return (
    <div className="flex h-screen bg-primary text-white">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopBar />
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* 3D Scene */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Scene />
        </motion.div>
      </div>
    </div>
  );
}