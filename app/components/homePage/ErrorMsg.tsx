"use client";
/** @jsxImportSource @emotion/react */

import useErrorMsgStore from "@/app/store/homePage/useErrorMsgStore";
import { createItemFormSt } from "@/app/style/homePage/createItemFormSt";

const ErrorMsg = () => {
  const { errorMsg, isErrorMsgChanged } = useErrorMsgStore();

  return (
    <div css={createItemFormSt.errorMsgContainer}>
      <p css={createItemFormSt.errorMsg(isErrorMsgChanged)}>{errorMsg}</p>
    </div>
  );
};

export default ErrorMsg;
