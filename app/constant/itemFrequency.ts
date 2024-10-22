export const itemFrequency = [
  {
    name: "Everyday",
    nameKo: "매일",
    frequency: 1,
  },
  {
    name: "Every Other Day",
    nameKo: "격일",
    frequency: 2,
  },
  {
    name: "Every Week",
    nameKo: "매주",
    frequency: 7,
  },
  {
    name: "Every Other Week",
    nameKo: "격주",
    frequency: 14,
  },
];

export const frequencyToKorean: { [key: number]: string } = {
  1: "매일",
  2: "격일",
  7: "매주",
  14: "격주",
};

export const frequencyToEnglish: { [key: number]: string } = {
  1: "Everyday",
  2: "E.O.D",
  7: "Every Week",
  14: "E.O.W",
};
