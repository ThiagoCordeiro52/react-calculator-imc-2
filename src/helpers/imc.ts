interface level {
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: number[];
  yourImc?: number;
}

export const levels: level[] = [
  {
    title: 'Magreza',
    color: '--gray-100',
    icon: 'down',
    imc: [0, 18.5],
  },
  {
    title: 'Normal',
    color: '--green',
    icon: 'up',
    imc: [18.5, 25],
  },
  {
    title: 'Sobrepeso',
    color: '--yellow',
    icon: 'down',
    imc: [25, 30],
  },
  {
    title: 'Obesidade',
    color: '--red',
    icon: 'down',
    imc: [30, 99],
  },
];

export function calculateImc(height: number, weight: number) {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc > levels[i].imc[0] && imc <= levels[i].imc[1]) {
      levels[i].yourImc = imc;
      return levels[i];
    }
  }

  return null;
}
