import { useEffect, useState } from "react";

export default function Square({ value, onSquareClick }) {
  //   const [value, setValue] = useState(null);

  //   function handleClick() {
  //     console.log("clicked!");
  //     setValue("X");
  //   }

  const [defaultContext, setDefaultContext] = useState("");

  useEffect(() => {
    console.log("use Effect!!");
    setDefaultContext("hi");
  }, [value]);

  return (
    <button className='square' onClick={onSquareClick}>
      {value}
      {defaultContext}
    </button>
  );
}
