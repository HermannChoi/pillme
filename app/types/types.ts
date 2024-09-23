export interface itemProps {
  id: string;
  timePeriod: string;
  date: string;
  name: string;
  hours: number;
  minutes: number;
  isTaken: boolean;
}

export interface listProps {
  Morning: itemProps[];
  Noon: itemProps[];
  Night: itemProps[];
  Any: itemProps[];
}

export interface modalList {
  deleteItem: string;
  renameUsername: string;
  modifyTime: string;
}
