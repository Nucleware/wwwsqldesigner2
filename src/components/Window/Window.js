import { t } from 'i18next';
import { useCentredDiv } from '../../lib/useCentredDiv';
import { useWindowDimensions } from '../../lib/useWindowDimensions';
import styles from './Window.module.css';

function Window({ title, onOK, showThrobber, open, children }) {
  const dimensions = useWindowDimensions();
  const [position, ref] = useCentredDiv();

  if (!open) {
    return <></>;
  }

  return (
    <>
      <div className={styles.background} style={{
        width: dimensions.width,
        height: dimensions.height,
        left: dimensions.scrollX,
        top: dimensions.scrollY,
      }} />
      <div className={styles.window} ref={ref} style={{
        left: position.left,
        top: position.top,
      }}>
        <div className={styles.windowtitle}>
          <img className={styles.throbber} src="images/throbber.gif" alt="" title="" style={{ visibility: showThrobber ? "" : "hidden" }} />
          {title}
        </div>
        <div className={styles.windowcontent}>{children}</div>
        <input type="button" className={styles.windowok} value={t('windowok')} onClick={onOK} />
        <input type="button" className={styles.windowcancel} value={t('windowcancel')} style={{ visibility: onOK ? "" : "hidden" }} />
      </div>
    </>
  );
}

export default Window;
