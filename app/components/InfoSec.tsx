"use client";
/** @jsxImportSource @emotion/react */

import useDateStore from "../store/useDateStore";
import useFormStore from "../store/useFormStore";
import { styles } from "../style/style";
import { getTotalListLength } from "../utils/getToTalListLength";

const InfoSec = () => {
  const { lastCheckedDate } = useDateStore();
  const { list } = useFormStore();

  return (
    <div css={styles.section}>
      <p>{lastCheckedDate}</p>
      <p>{"Registered Item : " + getTotalListLength(list)}</p>
    </div>
  );
};

export default InfoSec;
