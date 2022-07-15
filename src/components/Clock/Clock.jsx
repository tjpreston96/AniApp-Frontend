import React, { useState, useEffect } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    });
  }, [setTime, setDate]);

  return (
    <div className={styles.time}>
      <h3>
        Today's Date: <br />
        {date} <br />
        {time}
      </h3>
    </div>
  );
};

export default Clock;
