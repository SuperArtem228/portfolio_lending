'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/education';

export default function Education() {
  const educationItems = education.filter((item) => item.type === 'education');
  const courses = education.filter((item) => item.type === 'course');

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Образование и <span className="gradient-text">курсы</span>
        </motion.h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Образование</h3>
            <div className="space-y-4">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-strong rounded-3xl p-6"
                >
                  <h4 className="text-lg font-bold mb-1">{item.degree}</h4>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Курсы</h3>
            <div className="space-y-4">
              {courses.map((item, index) => (
                <motion.div
                  key={`${item.institution}-${item.period}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (educationItems.length + index) * 0.1, duration: 0.5 }}
                  className="glass-strong rounded-3xl p-6"
                >
                  <h4 className="text-lg font-bold mb-1">{item.degree}</h4>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

