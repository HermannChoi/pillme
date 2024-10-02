export interface itemProps {
  id: string;
  timePeriod: string;
  date: string;
  name: string;
  hours: number;
  minutes: number;
  isTaken: boolean;
  frequency: number;
  leftDay: number;
}

export interface listProps {
  Morning: itemProps[];
  Noon: itemProps[];
  Night: itemProps[];
  Any: itemProps[];
}

export interface modalList {
  deleteItem: string;
  resetUsername: string;
  modifyTime: string;
  modifyDate: string;
  resetItems: string;
  message: string;
  chooseFrequency: string;
}

export interface WhichPage {
  Home: string;
  Setting: string;
}
