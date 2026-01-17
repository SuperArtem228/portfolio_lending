export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const metrics: Metric[] = [
  {
    id: 'conversion',
    value: '20% → 62%',
    label: 'Рост конверсии',
    description: 'Из лида в клиента',
  },
  {
    id: 'onboarding',
    value: '10 → 3',
    label: 'Сокращение онбординга',
    description: 'Дней',
  },
  {
    id: 'support',
    value: '−45%',
    label: 'Снижение нагрузки',
    description: 'На саппорт',
  },
  {
    id: 'cost',
    value: '−50%',
    label: 'Снижение стоимости',
    description: 'Обслуживания',
  },
];

