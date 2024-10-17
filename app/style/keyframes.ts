import { keyframes } from "@emotion/react";
import { colors } from "./commonSt";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const scaleYFadeIn = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
    100% {
    opacity: 0;
  }
`;

export const fadeInAndOut = keyframes`
  0% {
    opacity: 0;
  }
  30%,80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const scaleZeroTo100 = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
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

export const congratsBarAni = keyframes`
  0% {
    opacity: 1;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const itemAppearAni = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 60px;
  }
`;

export const routeMessageAni = keyframes`
  //작아지고 원형으로 변하는 애니메이션
  30%,40% {
    transform: rotate(1080deg) scale(0.5);
    border-radius: 50%;
    width: 5rem;
  }
  //원형으로 변한 후 직사각형으로 변하는 애니메이션
  48%, 50% {
  transform: rotate(1080deg) scale(1);
    border-radius: 20px;
    width: 20rem;
    height: 5rem;
  }
  //직사각형으로 변한 후 얇아지는 애니메이션
  60%, 90% {
    transform: rotate(1080deg) scale(1);
    border-radius: 20px;
    width: 20rem;
    height: 0.5rem;
    border: 1px solid ${colors.green};
  }
  //얇아진 후 세로로 커지는 애니메이션
  95%,100% {
    transform: rotate(1080deg) scale(1);
    border: 1px solid transparent;
    border-radius: 20px;
    width: 20rem;
    height: 20rem;
  }
`;

export const progressBarAni = keyframes`
  65% {
    width: 0;
  } 75% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`;

export const checkAni = keyframes`
  0%, 80% {
    transform: scale(0);
  }
  88% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(1.0);
  }
  95% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(0);
  }
`;
