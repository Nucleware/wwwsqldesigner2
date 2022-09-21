import { t } from 'i18next';
import { useEffect, useRef, useState } from 'react';
import styles from './Window.module.css';

function Window({ title, onOK, showThrobber, open, children }) {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    scrollX: 0,
    scrollY: 0,
  });

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  const ref = useRef();

  useEffect(() => {
    if (!open) {
      return;
    }

    setPosition({
      left: Math.round(dimensions.scrollX + (dimensions.width - ref.current.offsetWidth) / 2),
      top: Math.round(dimensions.scrollY + (dimensions.height - ref.current.offsetHeight) / 2),
    });

    function handleScrollResize() {
      setDimensions({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
        scrollX: document.documentElement.scrollLeft,
        scrollY: document.documentElement.scrollTop,
      });
    }

    handleScrollResize();

    window.addEventListener('resize', handleScrollResize);
    window.addEventListener('scroll', handleScrollResize);

    return () => {
      window.removeEventListener('resize', handleScrollResize);
      window.removeEventListener('scroll', handleScrollResize);
    };
  }, [dimensions, open]);

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
