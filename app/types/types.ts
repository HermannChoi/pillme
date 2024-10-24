export interface ItemTypes {
  Oral: string;
  Topical: string;
  Etc: string;
}

export interface itemProps {
  id: string;
  itemType: keyof ItemTypes | "";
  timePeriod: keyof listProps | "";
  date: string;
  name: string;
  hours: number;
  minutes: number;
  isTaken: boolean;
  frequency: number;
  leftDay: number;
  takenDays: string[];
  deletedDate: string;
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
  chooseModify: string;
  chooseTimePeriod: string;
  chooseItemType: string;
  addTakenDays: string;
  deleteTakenDays: string;
  modifyTime: string;
  modifyDate: string;
  modifyLeftDay: string;
  showLeftDay: string;
  resetItems: string;
  message: string;
  chooseFrequency: string;
}

export interface WhichPage {
  Home: string;
  Record: string;
  Setting: string;
  Create: string;
}
