export interface itemProps {
  id: string;
  timePeriod: string;
  date: string;
  name: string;
  time: string;
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
}
