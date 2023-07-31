import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {


  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log("log in the component mout");
    

    return () => {
      //   console.log("the component is unmout");
      localStorage.setItem("counter", counter);
    };
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);

    console.log("every render");
  };
  return (
    <div>
      <Button onClick={handleIncrement}>+</Button>
      <Typography>{counter}</Typography>
    </div>
  );
}
