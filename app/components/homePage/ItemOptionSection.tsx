"use client";
/** @jsxImportSource @emotion/react */

import { memo } from "react";
import { clickSetWhichModal } from "@/app/hooks/clickSetWhichModal";
import useItemStore from "@/app/store/homePage/useItemStore";
import useModalStore from "@/app/store/useModalStore";
import useSettingStore from "@/app/store/useSettingStore";
import { itemSectionSt } from "@/app/style/homePage/itemSectionSt";
import { itemProps } from "@/app/types/types";
import Link from "next/link";
import { frequencyToKorean } from "@/app/constant/itemFrequency";

interface ItemOptionSectionProps {
  item: itemProps;
}

const ItemOptionSection: React.FC<ItemOptionSectionProps> = ({ item }) => {
  const { selectedItemId } = useItemStore();
  const { setWhichModal, setItemForModal } = useModalStore();
  const { isEnglish } = useSettingStore();

  return (
    <div css={itemSectionSt.optionContainer(item.id, selectedItemId)}>
      <Link
        href={`/pages/item-information/${item.id}`}
        onClick={(e) =>
          clickSetWhichModal({
            e,
            whichModal: "itemOption",
            setWhichModal,
            item,
            setItemForModal,
          })
        }
        css={itemSectionSt.optionBtn}
      >
        {isEnglish ? `Info.` : `정보`}
      </Link>
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
        css={itemSectionSt.optionBtn}
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
        css={itemSectionSt.optionBtn}
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
    </div>
  );
};

export default memo(ItemOptionSection);
