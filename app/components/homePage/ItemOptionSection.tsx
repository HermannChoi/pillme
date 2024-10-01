"use client";
/** @jsxImportSource @emotion/react */

import { clickSetWhichModal } from "@/app/hooks/clickSetWhichModal";
import useFormStore from "@/app/store/homePage/useFormStore";
import useItemStore from "@/app/store/homePage/useItemStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemProps, listProps } from "@/app/types/types";
import { vibrate } from "@/app/utils/vibrate";
import { motion } from "framer-motion";

interface ItemOptionSectionProps {
  item: itemProps;
}

const ItemOptionSection: React.FC<ItemOptionSectionProps> = ({ item }) => {
  const { selectedItemId } = useItemStore();
  const { setList } = useFormStore();
  const { setWhichModal, setItemForModal, setMessage } = useModalStore();
  const { isEnglish } = useSettingStore();

  const clickToggleIsEveryOtherDay = (clickedItem: itemProps) => {
    setList((prev) => ({
      ...prev,
      [clickedItem.timePeriod]: prev[
        clickedItem.timePeriod as keyof listProps
      ].map((item) => {
        return item.id === clickedItem.id
          ? item.isEveryOtherDay
            ? { ...item, isEveryOtherDay: false, leftDay: 0 }
            : { ...item, isEveryOtherDay: true, leftDay: 1 }
          : item;
      }),
    }));
    vibrate(100);
  };

  return (
    <div css={itemSectionSt.optionContainer(item.id, selectedItemId)}>
      <div css={itemSectionSt.optionBtnContainer}>
        <button
          onClick={(e) => {
            if (item.date === "0000-00-00") {
              setMessage(
                isEnglish
                  ? "you can modify the date once after you activate the item."
                  : "날짜 수정은 아이템 최초 일 회 활성화 이후 가능합니다."
              );
              return setWhichModal("message");
            }
            clickSetWhichModal({
              e,
              whichModal: "modifyDate",
              setWhichModal,
              item,
              setItemForModal,
            });
          }}
          css={itemSectionSt.optionBtn}
        >
          {isEnglish ? `Date` : `날짜`}
        </button>
        <button
          onClick={(e) =>
            clickSetWhichModal({
              e,
              whichModal: "modifyTime",
              setWhichModal,
              item,
              setItemForModal,
            })
          }
          css={itemSectionSt.optionBtn}
        >
          {isEnglish ? `Time` : `시간`}
        </button>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => clickToggleIsEveryOtherDay(item)}
        css={itemSectionSt.toggle2(item.isEveryOtherDay)}
      >
        {isEnglish
          ? item.isEveryOtherDay
            ? "2D 1T"
            : "1D 1T"
          : item.isEveryOtherDay
          ? "격일"
          : "매일"}
      </motion.div>
      <p>{`D-${item.leftDay}`}</p>
      <button
        onClick={(e) =>
          clickSetWhichModal({
            e,
            whichModal: "deleteItem",
            setWhichModal,
            item,
            setItemForModal,
          })
        }
        css={itemSectionSt.delBtn}
      >
        {isEnglish ? `DEL` : `삭제`}
      </button>
    </div>
  );
};

export default ItemOptionSection;
