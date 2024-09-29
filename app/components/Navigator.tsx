"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { navigatorSt } from "../style/navigatorSt";
import { navigatorItems } from "../constant/navigatorItems";

const Navigator = () => {
  return (
    <nav css={navigatorSt.container}>
      {navigatorItems.map((item, i) => {
        return (
          <Link key={i} href={item.url} css={navigatorSt.link}>
            <figure css={navigatorSt.figure}></figure>
            <p css={navigatorSt.text}>{item.name}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigator;
