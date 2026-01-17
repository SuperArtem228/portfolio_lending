'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 sm:p-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
            О <span className="gradient-text">себе</span>
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              {profile.about}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-4">Языки</h3>
            <div className="flex flex-wrap gap-4">
              {profile.languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 rounded-2xl bg-accent/10 text-accent font-medium"
                >
                  {lang.name} — {lang.level}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

