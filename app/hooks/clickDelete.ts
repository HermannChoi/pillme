import { itemProps, listProps } from "../types/types";

export const clickDelete = (
  itemForModal: itemProps,
  setList: (prev: (prev: listProps) => listProps) => void,
  moveToTrash: (value: itemProps) => void
) => {
  const storedTrashList = localStorage.getItem("trashList");
  const parsedTrashList = storedTrashList ? JSON.parse(storedTrashList) : [];

  const newTrashList = {
    ...itemForModal,
    deletedDate: new Date().toISOString().split("T")[0],
  };

  localStorage.setItem(
    "trashList",
    JSON.stringify([...parsedTrashList, newTrashList])
  );
  moveToTrash(newTrashList);

  setList((prev) => {
    const updatedList = {
      ...prev,
      [itemForModal.timePeriod]: prev[
        itemForModal.timePeriod as keyof listProps
      ].filter((item) => item.id !== itemForModal.id),
    };
    localStorage.setItem("medList", JSON.stringify(updatedList));
    return updatedList;
  });
};
