import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Time() {
  const [time, setCurrentTime] = useState("");
  useEffect(() => {
    const interval = setInterval(function () {
      setCurrentTime(format(new Date(), "HH:mm"));
    }, 100);

    return function cleanup() {
      clearInterval(interval);
    };
  }, [time]);

  return <div className="font-bold">{time}</div>;
}
