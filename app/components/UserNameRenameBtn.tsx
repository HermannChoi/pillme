"use client";
import useModalStore from "../store/useModalStore";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../style/outlineSt";

const UserNameRenameBtn = () => {
  const { setWhichModal } = useModalStore();

  return (
    <button
      onClick={() => setWhichModal("renameUsername")}
      css={outlineSt.resetUserNameBtn}
    >
      Rename Username
    </button>
  );
};

export default UserNameRenameBtn;
