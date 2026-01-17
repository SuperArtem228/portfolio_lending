'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Опыт <span className="gradient-text">работы</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-light to-accent-dark opacity-30" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg" />

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-strong rounded-3xl p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                      <p className="text-lg text-accent font-medium">{item.company}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                      <p className="text-sm text-muted-foreground">{item.duration}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 italic">{item.context}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg mb-3">Достижения:</h4>
                    {item.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-accent mt-1">•</span>
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

