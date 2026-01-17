'use client';

import { motion } from 'framer-motion';
import { metrics } from '@/data/metrics';

export default function Metrics() {
  return (
    <section id="metrics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Ключевые <span className="gradient-text">метрики</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-strong rounded-3xl p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

