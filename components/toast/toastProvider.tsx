import React, { useState, useMemo, ReactElement } from "react";
import { createPortal } from "react-dom";

import { ToastContext } from "./toastContext";
import { Toast } from "./toast";

import Portal from "../../HOC/Portal";

function generateUEID(): number {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = parseInt(("000" + first.toString(36)).slice(-3));
  second = parseInt(("000" + second.toString(36)).slice(-3));

  return first + second;
}

export const ToastProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [toasts, setToasts] = useState([{}]);

  const open = (content: any) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID, content },
    ]);
  };

  const close = (id: any) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast: any) => toast.id != id)
    );
  };
  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      <Portal>
        {toasts.map((toast: any) => (
          <Toast key={toast.id} close={() => close(toast.id)}>
            {toast.content}
          </Toast>
        ))}
      </Portal>
    </ToastContext.Provider>
  );
};
