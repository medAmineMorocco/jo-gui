import { useState, useEffect } from "react";

export function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidthChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidthChange);
  }, []);

  return width <= 500;
}
