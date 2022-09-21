import { useEffect, useRef, useState } from 'react';
import styles from './MiniMap.module.css';

function MiniMap() {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
    scrollX: 0,
    scrollY: 0,
  });

  const [portDimensions, setPortDimensions] = useState({
    width: 1,
    height: 1,
    left: 1,
    top: 1,
  });

  const ref = useRef();

  useEffect(() => {
    function handleScrollResize() {
      setDimensions({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
        scrollX: document.documentElement.scrollLeft,
        scrollY: document.documentElement.scrollTop,
      });

      const width = ref.current.offsetWidth - 2;
      const height = ref.current.offsetHeight - 2;
      const scaleX = width / 3000;
      const scaleY = height / 3000;

      setPortDimensions({
        width: Math.round(dimensions.width * scaleX - 4),
        height: Math.round(dimensions.height * scaleY - 4),
        left: Math.round(dimensions.scrollX * scaleX),
        top: Math.round(dimensions.scrollY * scaleY),
      });
    }

    handleScrollResize();

    window.addEventListener('resize', handleScrollResize);
    window.addEventListener('scroll', handleScrollResize);

    return () => {
      window.removeEventListener('resize', handleScrollResize);
      window.removeEventListener('scroll', handleScrollResize);
    };
  }, [dimensions]);

  return (
    <>
      <div className={styles.minimap} ref={ref}>
        <div className={styles.port} style={{
          width: portDimensions.width,
          height: portDimensions.height,
          left: portDimensions.left,
          top: portDimensions.top,
        }}></div>
      </div>
    </>
  );
}

export default MiniMap;
