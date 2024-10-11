import style from "@/app/style/item-information/itemInfoSus.module.css";

const ItemInfoSus = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div />
      </header>
      <section className={style.mainSection}>
        <div className={style.nameSection}>
          <div className={style.infoText} />
          <div className={style.name} />
        </div>
        <div className={style.infoTextSection}>
          <div className={style.infoTitle} />
          <div className={style.infoText} />
        </div>
        <div className={style.infoTextSection}>
          <div className={style.infoTitle} />
          <div className={style.infoText} />
        </div>
        <div className={style.infoTextSection}>
          <div className={style.infoTitle} />
          <div className={style.infoText} />
        </div>
        <div className={style.calendarSus} />
      </section>
    </div>
  );
};

export default ItemInfoSus;
