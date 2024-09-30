"use client";
/** @jsxImportSource @emotion/react */

import { outlineSt } from "../../style/homePage/outlineSt";
import Link from "next/link";

const Footer = () => {
  return (
    <footer css={outlineSt.footer}>
      <p css={outlineSt.footerText}>
        made by{" "}
        <Link href={"https://yunseokchoi.vercel.app/"} css={outlineSt.Link}>
          Yunseok Choi
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
