import style from "@/app/style/settingPage/settingSus.module.css";

const SettingSus = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.text} />
      </div>
      <div className={style.sectionOutline}>
        <div className={style.sectionTitle} />
        <div className={style.section1} />
      </div>
      <div className={style.sectionOutline}>
        <div className={style.sectionTitle} />
        <div className={style.section2} />
      </div>
      <div className={style.sectionOutline}>
        <div className={style.sectionTitle} />
        <div className={style.section2} />
      </div>
    </div>
  );
};

export default SettingSus;
