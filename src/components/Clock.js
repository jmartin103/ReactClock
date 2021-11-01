import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => handleTimeChange(), 1000);
  });

  const handleTimeChange = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="Clock">
      <h3>
        The current time is <strong>{time}</strong>.
      </h3>
    </div>
  );
};

export default Clock;
