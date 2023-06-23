import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const [splitList, setSplitList] = useState([]);
  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };

  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;

    setSplitList([]);
  };

  const splitTimer = () => {
    setSplitList((split) => [...split, time]);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    splitList,
  };
};
export default useTimer;
