import { motion } from 'framer-motion';

export function TopBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="h-16 bg-dark-800 border-b border-dark-600 flex items-center justify-between px-4"
    >
      <div className="flex items-center space-x-4">
        <button className="md:hidden p-2 hover:bg-dark-700 rounded-lg">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold">System Overview</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
        <span className="text-sm">System Status: Online</span>
      </div>
    </motion.div>
  );
}