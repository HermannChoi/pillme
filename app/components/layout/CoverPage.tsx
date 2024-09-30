"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";
import useCoverPageStore from "@/app/store/layout/useCoverPageStore";
import { coverPageSt } from "@/app/style/layout/coverPageSt";

const CoverPage = () => {
  const { isCoverPageGone, setIsCoverPageGone } = useCoverPageStore();

  useEffect(() => {
    setTimeout(() => {
      setIsCoverPageGone(true);
    }, 1200);
  }, [setIsCoverPageGone]);

  return (
    <div css={coverPageSt.container(isCoverPageGone)}>
      <Image src={pill} alt="pill" priority={true} css={coverPageSt.pill} />
    </div>
  );
};

export default CoverPage;
