export const itemFrequency = [
  {
    name: "Everyday",
    nameKo: "매일",
    frequency: 0,
  },
  {
    name: "Every Other Day",
    nameKo: "격일",
    frequency: 1,
  },
  {
    name: "Every Week",
    nameKo: "매주",
    frequency: 6,
  },
  {
    name: "Every Other Week",
    nameKo: "격주",
    frequency: 13,
  },
];

export const frequencyToKorean: { [key: number]: string } = {
  0: "매일",
  1: "격일",
  6: "매주",
  13: "격주",
};

export const frequencyToEnglish: { [key: number]: string } = {
  0: "Everyday",
  1: "E.O.D",
  6: "Every Week",
  13: "E.O.W",
};
