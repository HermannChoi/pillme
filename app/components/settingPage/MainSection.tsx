"use client";
import useNavigatorStore from "@/app/store/useNavigatorStore";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect } from "react";
import ResetButtons from "../ResetButtons";

const MainSection = () => {
  const { setWhichPage } = useNavigatorStore();

  useEffect(() => {
    setWhichPage("Setting");
  }, [setWhichPage]);

  return (
    <section
      css={css`
        width: 100%;
        padding: 1rem;
        border-radius: 10px;
        background-color: #80808020;
      `}
    >
      <ResetButtons />
    </section>
  );
};

export default MainSection;
