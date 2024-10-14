import { listProps } from "../types/types";

export const timeOptions: (keyof listProps)[] = [
  "Morning",
  "Noon",
  "Night",
  "Any",
];

export const timeOptionsKo: { [key: string]: string } = {
  Morning: "아침",
  Noon: "점심",
  Night: "저녁",
  Any: "언제나",
};
