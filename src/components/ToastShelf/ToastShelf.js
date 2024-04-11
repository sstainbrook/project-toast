import React, { useContext, useEffect } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import useEscapeKey from "../../hooks/UseEscapeKey";

function ToastShelf() {
  const { toasts, clearAll } = useContext(ToastContext);

  useEscapeKey(clearAll);

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
