// See: https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "./useWindowDimensions";

export function useCentredDiv() {
  const dimensions = useWindowDimensions();

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  const targetRef = useRef();

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    setPosition({
      left: Math.round(dimensions.scrollX + (dimensions.width - targetRef.current.offsetWidth) / 2),
      top: Math.round(dimensions.scrollY + (dimensions.height - targetRef.current.offsetHeight) / 2),
    });
  }, [dimensions]);

  return [position, targetRef];
}
