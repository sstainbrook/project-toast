import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts &&
        toasts.map(({ id, variant, message }) => (
          <Toast
            key={id}
            variant={variant}
            handleDismiss={() => handleDismiss(id)}
          >
            {message}
          </Toast>
        ))}
    </ol>
  );
}

export default ToastShelf;
