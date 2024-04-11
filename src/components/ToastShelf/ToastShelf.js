import React, { useContext, useEffect } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, clearAll } = useContext(ToastContext);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key == "Escape") {
        clearAll();
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toasts &&
        toasts.map(({ id, variant, message }) => (
          <li
            key={id}
            className={styles.toastWrapper}
          >
            <Toast
              id={id}
              variant={variant}
            >
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
