import { motion } from 'framer-motion';

export function Sidebar() {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 h-full bg-dark-800 p-4 border-r border-dark-600"
    >
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-accent animate-pulse" />
        <h1 className="text-xl font-bold text-accent">A.I.D.E.N.</h1>
      </div>

      <nav className="space-y-4">
        {['Dashboard', 'Agents', 'Tasks', 'Analytics', 'Settings'].map((item) => (
          <motion.a
            key={item}
            href="#"
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-dark-700 transition-colors"
          >
            <span className="text-accent">•</span>
            <span>{item}</span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}