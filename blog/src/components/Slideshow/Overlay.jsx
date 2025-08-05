'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Overlay({ onClick }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        onClick={onClick}
        className="fixed inset-0 bg-black/70 z-10"
      />
    </AnimatePresence>,
    document.getElementById('overlay-root')
  );
}
