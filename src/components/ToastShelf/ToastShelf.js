import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts &&
        toasts.map(({ id, variant, message }) => (
          <li
            key={id}
            className={styles.toastWrapper}
          >
            <Toast
              variant={variant}
              handleDismiss={() => handleDismiss(id)}
            >
              {message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
