import React, { useState, useRef, useContext } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const { addToast } = useContext(ToastContext);

  let messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    addToast(variant, message);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
    messageRef.current.focus();
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
      <ToastShelf />
      <form onSubmit={handleSubmit}>
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
                ref={messageRef}
                id='message'
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
