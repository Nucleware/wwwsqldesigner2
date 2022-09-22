// See: https://codesandbox.io/s/blissful-galileo-kr4p5?from-embed=&file=/src/useDimensions.js

import { useEffect, useState } from "react";

function getDimensions() {
  return {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
    scrollX: document.documentElement.scrollLeft,
    scrollY: document.documentElement.scrollTop,
  };
}

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState(getDimensions);

  useEffect(() => {
    function handleScrollResize() {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleScrollResize);
    window.addEventListener('scroll', handleScrollResize);

    return () => {
      window.removeEventListener('resize', handleScrollResize);
      window.removeEventListener('scroll', handleScrollResize);
    };
  }, []);

  return dimensions;
}
