import style from "@/app/style/homePage/homeServerAndSuspense.module.css";

const SettingSuspense = () => {
  return (
    <div className={style.container}>
      <div className={style.userNameSection} />
      <div className={style.createItemForm} />
      <div className={style.infoSection} />
      <div className={style.itemSection} />
    </div>
  );
};

export default SettingSuspense;
