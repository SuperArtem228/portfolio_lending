export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  type: 'education' | 'course';
}

export const education: EducationItem[] = [
  {
    institution: 'Уральский федеральный университет',
    degree: 'Международная экономика (Full Eng)',
    period: 'Выпуск 2026',
    type: 'education',
  },
  {
    institution: 'Beijing University',
    degree: 'Обучение по гранту',
    period: '2024',
    type: 'education',
  },
  {
    institution: 'Karpov.courses',
    degree: 'Принятие решений на основе данных',
    period: '2024',
    type: 'course',
  },
  {
    institution: 'GoPractice',
    degree: 'Симулятор управления ростом продукта',
    period: '2024',
    type: 'course',
  },
  {
    institution: 'GoPractice',
    degree: 'SQL для продуктовой аналитики',
    period: '2023',
    type: 'course',
  },
];

