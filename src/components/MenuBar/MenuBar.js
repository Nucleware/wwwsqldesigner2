import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Toggle from "../Toggle/Toggle";
import styles from './MenuBar.module.css';

function MenuBar({ openOptions }) {
  const defaultState = !document.location.href.match(/toolbar=hidden/);

  const [visible, setVisible] = useState(defaultState);
  const { t } = useTranslation();

  return (
    <>
      <div className={classNames(styles.bar, { [styles.hidden]: !visible })}>
        <Toggle state={visible} onClick={() => setVisible(!visible)}></Toggle>
        <input type="button" value={t("saveload")} />

        <hr />

        <input type="button" value={t("addtable")} />
        <input type="button" value={t("edittable")} />
        <input type="button" value={t("tablekeys")} />
        <input type="button" value={t("removetable")} />
        <input type="button" value={t("aligntables")} />
        <input type="button" value={t("cleartables")} />

        <hr />

        <input type="button" value={t("addrow")} />
        <input type="button" value={t("editrow")} />
        <input type="button" value={t("uprow")} className={styles.small} />
        <input type="button" value={t("downrow")} className={styles.small} />
        <input type="button" value={t("foreigncreate")} />
        <input type="button" value={t("foreignconnect")} />
        <input type="button" value={t("foreigndisconnect")} />
        <input type="button" value={t("removerow")} />

        <hr />

        <input type="button" value={t("options")} onClick={openOptions} />
        <a href="https://github.com/ondras/wwwsqldesigner/wiki" target="_blank" rel="noreferrer">
          <input type="button" value={t('docs')} />
        </a>
      </div>
    </>
  );
}

export default MenuBar;
