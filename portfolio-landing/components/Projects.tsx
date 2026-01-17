'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Кейсы и <span className="gradient-text">проекты</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 italic">{project.context}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Проблема</h4>
                    <p className="text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Решение</h4>
                    <p className="text-sm">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Результат</h4>
                    <ul className="space-y-1">
                      {project.impact.map((impact, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

