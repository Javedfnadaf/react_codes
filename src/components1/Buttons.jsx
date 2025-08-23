import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Buttons = () => {
  const { increase, decrease } = useContext(CounterContext);

  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
};

export default Buttons;
