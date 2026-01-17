'use client';

import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { profile } from '@/data/profile';

const navItems = [
  { label: 'Опыт', href: '#experience' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Навыки', href: '#skills' },
  { label: 'О себе', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
    >
      <nav className="max-w-7xl mx-auto glass rounded-3xl px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-semibold gradient-text hover:opacity-80 transition-opacity"
        >
          {profile.name}
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm font-medium text-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}

