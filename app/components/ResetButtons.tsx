"use client";
/** @jsxImportSource @emotion/react */

import useModalStore from "../store/useModalStore";
import { outlineSt } from "../style/outlineSt";

const ResetButtons = () => {
  const { setWhichModal } = useModalStore();

  return (
    <div css={outlineSt.resetBtnContainer}>
      <button
        onClick={() => setWhichModal("resetUsername")}
        css={outlineSt.resetUserNameBtn}
      >
        Rename Username
      </button>
      <button
        onClick={() => setWhichModal("resetItems")}
        css={outlineSt.resetItemNameBtn}
      >
        Reset Items
      </button>
    </div>
  );
};

export default ResetButtons;
