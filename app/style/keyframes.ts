import { keyframes } from "@emotion/react";
import { colors } from "./commonSt";

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
    100% {
    opacity: 0;
  }
`;

export const twitching1 = keyframes`
  20%{transform: translateX(-2px)}
  40%{transform: translateX(2px)}
  60%{transform: translateX(-2px)}
  80%{transform: translateX(2px)}
  100%{transform: translateX(0px)}
`;

export const twitching2 = keyframes`
  20%{transform: translateX(-1px)}
  40%{transform: translateX(2px)}
  60%{transform: translateX(-2px)}
  80%{transform: translateX(2px)}
  100%{transform: translateX(0px)}
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const rotate360 = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const emptyItemSectionAni = keyframes`
  100% {
    color: ${colors.green};
  }
`;
