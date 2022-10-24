import { useEffect, useState, useRef } from "react";

export function useClickAway() {
  const [active, setActive] = useState(false);
  const ref = useRef<any>(null);

  function toggle() {
    setActive(!active);
  }

  function handleClick(event: { target: any }) {
    if (ref.current && !ref.current.contains(event.target)) setActive(false);
  }

  useEffect(() => {
    if (active) document.addEventListener("mousedown", handleClick);
    else document.removeEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [active]);

  return { ref, active, setActive, toggle };
}
