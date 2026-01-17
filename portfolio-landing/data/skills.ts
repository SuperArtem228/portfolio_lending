export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Product',
    skills: [
      'CustDev',
      'JTBD',
      'CJM',
      'Roadmap',
      'Product strategy',
      'Discovery/Delivery',
      'Product-led growth',
      'PMF',
    ],
  },
  {
    category: 'Experimentation & metrics',
    skills: [
      'A/B тесты',
      'Unit-экономика (ARPU/LTV/CAC)',
      'Деревья метрик',
      'DAU/WAU/MAU',
    ],
  },
  {
    category: 'Analytics & tools',
    skills: [
      'SQL',
      'Python',
      'Amplitude',
      'PowerBI/Superset',
      'Excel',
    ],
  },
  {
    category: 'Process',
    skills: [
      'Agile/Scrum',
      'User Story / User Story Mapping',
      'Приоритизация ICE/RICE',
    ],
  },
  {
    category: 'AI',
    skills: [
      'n8n',
      'GPT',
      'Cursor',
      'Gemini agents',
      'AI-автоматизации',
      'Вайб-кодинг',
    ],
  },
];

