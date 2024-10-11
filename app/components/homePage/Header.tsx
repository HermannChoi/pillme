import Image from "next/image";
import pill from "@/app/assets/svg/pill.svg";
import style from "@/app/style/homePage/homeServerAndSuspense.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Image src={pill} alt="pill" priority={true} className={style.pillImg} />
      <h1 className={style.h1}>Pillme</h1>
    </header>
  );
};

export default Header;
