"use client";
/** @jsxImportSource @emotion/react */

import useErrorMsgStore from "../store/useErrorMsgStore";
import { createItemFormSt } from "../style/createItemFormSt";

const ErrorMsg = () => {
  const { errorMsg, isErrorMsgChanged } = useErrorMsgStore();

  return (
    <div css={createItemFormSt.errorMsgContainer}>
      <p css={createItemFormSt.errorMsg(isErrorMsgChanged)}>{errorMsg}</p>
    </div>
  );
};

export default ErrorMsg;
