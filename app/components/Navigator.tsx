"use client";
/** @jsxImportSource @emotion/react */

import Link from "next/link";
import { navigatorSt } from "../style/navigatorSt";
import { navigatorItems } from "../constant/navigatorItems";
import Image from "next/image";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import useNavigatorStore from "../store/useNavigatorStore";
import { WhichPage } from "../types/types";

const Navigator = () => {
  const { whichPage, setWhichPage } = useNavigatorStore();

  return (
    <nav css={navigatorSt.container}>
      {navigatorItems.map((item, i) => {
        return (
          <motion.div
            key={i}
            whileTap={{ scale: 0.8, backgroundColor: "#80808030" }}
            css={navigatorSt.linkContainer}
            onClick={() => setWhichPage(item.name as keyof WhichPage)}
          >
            <Link href={item.url} css={navigatorSt.link}>
              <figure css={navigatorSt.figure}>
                <Image
                  src={require(`@/app/assets/svg/${item.img}.svg`)}
                  alt="linkImage"
                  css={css`
                    width: 100%;
                    height: 100%;
                    ${whichPage === item.name &&
                    `filter: invert(16%) sepia(89%) saturate(6054%)
                      hue-rotate(150deg) brightness(97%) contrast(113%);`}
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
