import { createContext } from "react";

interface ToastContext {
  open: (content: any) => void;
}

export const ToastContext = createContext<ToastContext | null>(null);
