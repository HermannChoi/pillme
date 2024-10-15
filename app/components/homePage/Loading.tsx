"use client";
/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";

const Loading = () => {
  const loadingAnimation = keyframes`
    from {
      width: 0;
    }
    to {
      width: 110px;
    }
  `;
  const loadingSt = css`
    transform-origin: left;
    font-size: 20px;
    font-weight: 700;
    animation: ${loadingAnimation} 2s infinite;
    overflow: hidden;
  `;
  return <div css={loadingSt}>LOADING...</div>;
};

export default Loading;
