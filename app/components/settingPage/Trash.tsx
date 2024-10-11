"use client";
/** @jsxImportSource @emotion/react */

import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import useSettingStore from "../../store/useSettingStore";
import Image from "next/image";
import trash from "@/app/assets/svg/trash.svg";
import Link from "next/link";

const Trash = () => {
  const { isEnglish } = useSettingStore();

  return (
    <>
      <h2 css={settingPageSt.sectionTitle}>{isEnglish ? `Data` : `데이터`}</h2>
      <section css={settingPageSt.section}>
        <div css={settingPageSt.listContainer}>
          <p>{isEnglish ? `Trash Can` : `휴지통`}</p>
          <Link href={"/pages/trash"} css={settingPageSt.trashButton}>
            <Image src={trash} alt="trash" css={settingPageSt.trashIcon} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Trash;
