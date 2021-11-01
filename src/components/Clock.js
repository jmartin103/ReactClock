import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  const tick = () => {
    setTime(new Date().toLocaleString());
  };

  return (
    <div>
      <p>The current time is {time}.</p>
    </div>
  );
};

export default Clock;
