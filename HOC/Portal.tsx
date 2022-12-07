import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return mounted
    ? createPortal(children, document.querySelector("#myportal"))
    : null;
};

export default Portal;
