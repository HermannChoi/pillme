"use client";
/** @jsxImportSource @emotion/react */

import trash from "@/app/assets/svg/trash.svg";
import { settingPageSt } from "@/app/style/settingPage/settingPageSt";
import Image from "next/image";
import Link from "next/link";
import useSettingStore from "../../store/useSettingStore";

const Trash = () => {
  const { isEnglish } = useSettingStore();

  return (
    <div css={settingPageSt.sectionOutline}>
      <h2 css={settingPageSt.sectionTitle}>{isEnglish ? `Data` : `데이터`}</h2>
      <section css={settingPageSt.section}>
        <div css={settingPageSt.listContainer}>
          <p>{isEnglish ? `Trash Can` : `휴지통`}</p>
          <Link href={"/pages/trash"} css={settingPageSt.trashButton}>
            <Image
              src={trash}
              alt="trash"
              priority={true}
              css={settingPageSt.trashIcon}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Trash;
