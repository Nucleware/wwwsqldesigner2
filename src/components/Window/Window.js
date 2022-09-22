import { t } from 'i18next';
import { useEffect } from 'react';
import { useCentredDiv } from '../../lib/useCentredDiv';
import { useWindowDimensions } from '../../lib/useWindowDimensions';
import styles from './Window.module.css';

function Window({ title, onResult, showThrobber, open, children }) {
  const dimensions = useWindowDimensions();
  const [position, ref] = useCentredDiv();

  useEffect(() => {
    if (!ref.current || !open) {
      return;
    }

    const formElements = ["input", "select", "textarea"];
    const all = ref.current.getElementsByTagName("*");

    for (let i = 0; i < all.length; i++) {
      if (formElements.indexOf(all[i].tagName.toLowerCase()) !== -1) {
        all[i].focus();
        break;
      }
    }
  }, [ref, open]);

  useEffect(() => {
    function key(e) {
      if (!open) {
        return;
      }

      if (e.keyCode === 13) {
        onResult(true);
      }

      if (e.keyCode === 27) {
        onResult(false);
      }
    }

    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('keydown', key);
    };
  }, [onResult, open]);

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
        <input type="button" className={styles.windowok} value={t('windowok')} onClick={() => onResult(true)} />
        <input type="button" className={styles.windowcancel} value={t('windowcancel')} style={{ visibility: onResult ? "" : "hidden" }} onClick={() => onResult(false)} />
      </div>
    </>
  );
}

export default Window;
