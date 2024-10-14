import style from "@/app/style/homePage/homeSus.module.css";

const HomePageSus = () => {
  return (
    <div className={style.container}>
      <div className={style.headerSus}>
        <div className={style.h1Text} />
      </div>
      <div className={style.userNameSection} />
      <div className={style.createItemForm} />
      <div className={style.infoSection} />
      <div className={style.itemSection} />
    </div>
  );
};

export default HomePageSus;
