"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { navigatorSt } from "../style/navigatorSt";
import { navigatorItems } from "../constant/navigatorItems";
import Image from "next/image";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const Navigator = () => {
  return (
    <nav css={navigatorSt.container}>
      {navigatorItems.map((item, i) => {
        return (
          <motion.div
            key={i}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href={item.url} css={navigatorSt.link}>
              <figure css={navigatorSt.figure}>
                <Image
                  src={require(`@/app/assets/svg/${item.img}.svg`)}
                  alt="linkImage"
                  css={css`
                    width: 100%;
                    height: 100%;
                    //filter: contrast(
                      0.1
                    ); // 상태로 해당 페이지 아닌 거에만 적용하기
                  `}
                />
              </figure>
              <p css={navigatorSt.text}>{item.name}</p>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Navigator;
