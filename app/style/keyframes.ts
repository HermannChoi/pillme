import { keyframes } from "@emotion/react";

export const fadeOut = keyframes`
  70% {
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
