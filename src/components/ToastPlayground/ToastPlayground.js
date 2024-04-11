import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [messageText, setMessageText] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [activeToast, setActiveToast] = useState(null);

  function showToast() {
    const newToast = (
      <Toast
        variant={variant}
        handleDismiss={removeToast}
      >
        {messageText}
      </Toast>
    );
    setActiveToast(newToast);
  }

  function removeToast() {
    setActiveToast(null);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt='Cute toast mascot'
          src='/toast.png'
        />
        <h1>Toast Playground</h1>
      </header>
      {activeToast}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label
                key={option}
                htmlFor={`variant-${option}`}
              >
                <input
                  id={`variant-${option}`}
                  type='radio'
                  name='variant'
                  value={option}
                  checked={option === variant}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={showToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
