'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl text-muted-foreground font-medium"
          >
            {profile.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-lg text-muted-foreground"
          >
            <span>Discovery & Strategy</span>
            <span>•</span>
            <span>Data-Driven Decisions</span>
            <span>•</span>
            <span>Product Growth</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center pt-8"
          >
            <div className="glass-strong rounded-3xl px-8 py-6 inline-block">
              <div className="text-sm text-muted-foreground mb-2">Опыт работы</div>
              <div className="text-3xl font-bold gradient-text">{profile.experience}</div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed pt-8"
          >
            {profile.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <a
              href={profile.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
            >
              Написать в Telegram
            </a>
            <a
              href={`mailto:${profile.contacts.email}`}
              className="px-6 py-3 rounded-2xl glass font-medium hover:bg-accent hover:text-white transition-all"
            >
              Написать на почту
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

