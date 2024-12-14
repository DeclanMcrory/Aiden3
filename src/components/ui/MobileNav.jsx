import { motion } from 'framer-motion';
import { useState } from 'react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="md:hidden"
    >
      <motion.div
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="bg-dark-800 overflow-hidden"
      >
        <nav className="p-4 space-y-2">
          {['Dashboard', 'Agents', 'Tasks', 'Analytics', 'Settings'].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileTap={{ scale: 0.95 }}
              className="block p-2 rounded-lg hover:bg-dark-700 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
}