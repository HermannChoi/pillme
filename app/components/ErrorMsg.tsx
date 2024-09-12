"use client";
/** @jsxImportSource @emotion/react */

import { styles } from "../style/style";
import useErrorMsgStore from "../store/useErrorMsgStore";

const ErrorMsg = () => {
  const { errorMsg, isErrorMsgChanged } = useErrorMsgStore();

  return (
    <div css={styles.msgContainer}>
      <p css={styles.errorMsg(isErrorMsgChanged)}>{errorMsg}</p>
    </div>
  );
};

export default ErrorMsg;
