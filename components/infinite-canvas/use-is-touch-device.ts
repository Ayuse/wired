"use client";

import * as React from "react";

export const useIsTouchDevice = (): boolean => {
  const [isTouch, setIsTouch] = React.useState(false);

  React.useEffect(() => {
    setIsTouch(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as { msMaxTouchPoints?: number }).msMaxTouchPoints! > 0
    );
  }, []);

  return isTouch;
};
