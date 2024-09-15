"use client";
/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { coverPageSt } from "../style/coverPageSt";
import useCoverPageStore from "../store/useCoverPageStore";
import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";

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
