import { useEffect } from "react";

function useEscapeKey(action) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key == "Escape") {
        action();
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [action]);
}

export default useEscapeKey;
