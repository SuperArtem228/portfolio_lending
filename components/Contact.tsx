'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Contact() {
  const contactButtons = [
    {
      label: 'Написать в Telegram',
      href: profile.contacts.telegram,
      icon: '💬',
      primary: true,
    },
    {
      label: 'Написать на почту',
      href: `mailto:${profile.contacts.email}`,
      icon: '✉️',
      primary: false,
    },
    {
      label: 'Открыть LinkedIn',
      href: profile.contacts.linkedin,
      icon: '💼',
      primary: false,
    },
    {
      label: 'Открыть резюме на HH',
      href: profile.contacts.hh,
      icon: '📄',
      primary: false,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Давайте <span className="gradient-text">создадим</span> что-то вместе
          </h2>
          <p className="text-lg text-muted-foreground">
            Всегда открыт для интересных проектов и предложений
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactButtons.map((button, index) => (
            <motion.a
              key={button.label}
              href={button.href}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-3xl p-6 flex items-center gap-4 font-medium transition-all ${
                button.primary
                  ? 'bg-accent text-white hover:bg-accent-dark'
                  : 'glass-strong hover:bg-accent/10'
              }`}
            >
              <span className="text-2xl">{button.icon}</span>
              <span>{button.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} {profile.name}. Все права защищены.</p>
        </motion.div>
      </div>
    </section>
  );
}

