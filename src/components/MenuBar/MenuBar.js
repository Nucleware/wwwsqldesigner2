import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Toggle from "../Toggle/Toggle";
import styles from './MenuBar.module.css';

function MenuBar() {
  const defaultState = !document.location.href.match(/toolbar=hidden/);

  const [visible, setVisible] = useState(defaultState);
  const { t } = useTranslation();

  return (
    <>
      <div className={classNames(styles.bar, { [styles.hidden]: !visible })}>
        <Toggle state={visible} onClick={() => setVisible(!visible)}></Toggle>
        <input type="button" id="saveload" value={t("saveload")} />

        <hr />

        <input type="button" id="addtable" value={t("addtable")} />
        <input type="button" id="edittable" value={t("edittable")} />
        <input type="button" id="tablekeys" value={t("tablekeys")} />
        <input type="button" id="removetable" value={t("removetable")} />
        <input type="button" id="aligntables" value={t("aligntables")} />
        <input type="button" id="cleartables" value={t("cleartables")} />

        <hr />

        <input type="button" id="addrow" value={t("addrow")} />
        <input type="button" id="editrow" value={t("editrow")} />
        <input type="button" id="uprow" value={t("uprow")} className={styles.small} />
        <input type="button" id="downrow" value={t("downrow")} className={styles.small} />
        <input type="button" id="foreigncreate" value={t("foreigncreate")} />
        <input type="button" id="foreignconnect" value={t("foreignconnect")} />
        <input type="button" id="foreigndisconnect" value={t("foreigndisconnect")} />
        <input type="button" id="removerow" value={t("removerow")} />

        <hr />

        <input type="button" id="options" value={t("options")} />
        <a href="https://github.com/ondras/wwwsqldesigner/wiki" target="_blank" rel="noreferrer">
          <input type="button" id="docs" value={t('docs')} />
        </a>
      </div>
    </>
  );
}

export default MenuBar;
