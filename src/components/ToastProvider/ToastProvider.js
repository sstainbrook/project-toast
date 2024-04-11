import React, { useState, createContext, useMemo } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };

    setToasts([...toasts, newToast]);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id != id);
    setToasts(nextToasts);
  }

  const value = useMemo(() => {
    return {
      toasts,
      addToast,
      removeToast,
    };
  }, [toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
