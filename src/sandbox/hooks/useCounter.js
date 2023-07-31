import { useState } from "react";

export default function useCounter(initialVulee = 0) {
  const [counter, setCounter] = useState(initialVulee);
  const inc = () => setCounter((prev) => prev + 1);
  const dec = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(initialVulee);
  return { counter, inc, dec, reset };
}
