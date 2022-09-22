import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from '../../lib/useWindowDimensions';
import styles from './MiniMap.module.css';

function MiniMap() {
  const dimensions = useWindowDimensions();

  const [portDimensions, setPortDimensions] = useState({
    width: 1,
    height: 1,
    left: 1,
    top: 1,
  });

  const ref = useRef();

  useEffect(() => {
    function handleScrollResize() {
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
