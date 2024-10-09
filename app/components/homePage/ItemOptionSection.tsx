"use client";
import { frequencyToKorean } from "@/app/constant/itemFrequency";
/** @jsxImportSource @emotion/react */

import { clickSetWhichModal } from "@/app/hooks/clickSetWhichModal";
import useItemStore from "@/app/store/homePage/useItemStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemProps } from "@/app/types/types";

interface ItemOptionSectionProps {
  item: itemProps;
}

const ItemOptionSection: React.FC<ItemOptionSectionProps> = ({ item }) => {
  const { selectedItemId } = useItemStore();
  const { setWhichModal, setItemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <div css={itemSectionSt.optionContainer(item.id, selectedItemId)}>
      <button
        onClick={(e) =>
          clickSetWhichModal({
            e,
            whichModal: "itemOption",
            setWhichModal,
            item,
            setItemForModal,
          })
        }
        css={itemSectionSt.modifyBtn}
      >
        {isEnglish ? `INFO.` : `정보`}
      </button>
      <button
        onClick={(e) =>
          clickSetWhichModal({
            e,
            whichModal: "chooseModify",
            setWhichModal,
            item,
            setItemForModal,
          })
        }
        css={itemSectionSt.modifyBtn}
      >
        {isEnglish ? `Modify` : `수정`}
      </button>
      <button
        onClick={(e) =>
          clickSetWhichModal({
            e,
            whichModal: "chooseFrequency",
            setWhichModal,
            item,
            setItemForModal,
          })
        }
        css={itemSectionSt.frequencyBtn}
      >
        {isEnglish
          ? item.frequency + "D 1T"
          : frequencyToKorean[item.frequency]}
      </button>
      <button
        onClick={(e) => {
          clickSetWhichModal({
            e,
            whichModal: "showLeftDay",
            setWhichModal,
            item,
            setItemForModal,
          });
        }}
        css={itemSectionSt.leftDayBtn}
      >
        <p>{`D-${item.leftDay}`}</p>
      </button>
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
