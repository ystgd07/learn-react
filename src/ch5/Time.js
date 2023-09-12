import React, { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    console.log("Mount!!");

    return () => {
      clearInterval(timeId);
      console.log("unMount!!");
    };
  }, []);

  return (
    <div>
      <h2>What time is now?</h2>
      <h1>
        {time.getHours()}시:{time.getMinutes()}분:{time.getSeconds()}초
      </h1>
    </div>
  );
}

export default Time;
