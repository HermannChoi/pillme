"use client";
/** @jsxImportSource @emotion/react */

import { styles } from "../style/style";
import Link from "next/link";

const Footer = () => {
  return (
    <footer css={styles.footer}>
      <p css={styles.footerText}>
        made by{" "}
        <Link href={"https://yunseokchoi.vercel.app/"} css={styles.Link}>
          Yunseok Choi
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
