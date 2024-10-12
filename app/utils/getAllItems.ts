import { listProps } from "../types/types";

export const getAllItems = (list: listProps) => {
  //안전성을 위해 빈 배열인지 확인 후 배열로 반환
  return [
    ...(Array.isArray(list.Morning) ? list.Morning : []),
    ...(Array.isArray(list.Noon) ? list.Noon : []),
    ...(Array.isArray(list.Night) ? list.Night : []),
    ...(Array.isArray(list.Any) ? list.Any : []),
  ];
};
