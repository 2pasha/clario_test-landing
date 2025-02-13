import { useEffect, useState } from "react";

export const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
};
