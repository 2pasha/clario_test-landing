import { useEffect, useRef, useState } from "react";
import "./Timer.scss";

// eslint-disable-next-line react/prop-types
const Timer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const halfTimeLoggedRef = useRef(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate) - new Date();
      const totalSeconds = Math.floor(difference / 1000);

      if (totalSeconds <= 0) {
        return null;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return { hours, minutes, seconds, totalSeconds };
    };

    const initial = calculateTimeLeft();

    if (initial) {
      setTimeLeft(initial);
      console.log("timerStart");
    }

    const initialDefference = new Date(endDate) - new Date(Date.now());
    const initialTotalSeconds = Math.floor(initialDefference / 1000);

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();

      if (!remaining) {
        clearInterval(timer);
        setIsVisible(false);

        console.log("timeEnd");
        return;
      }

      setTimeLeft(remaining);

      if (!halfTimeLoggedRef.current && remaining.totalSeconds <= initialTotalSeconds / 2) {
        console.log("timerHalfTime");
        halfTimeLoggedRef.current = true;
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endDate]);

  if (!isVisible || !timeLeft) {
    return null;
  }

  return (
    <div className="timer">
      <span className="timer__number timer__number--hours">{String(timeLeft.hours).padStart(2, "0")}</span>
      <span>:</span>
      <span className="timer__number timer__number--minutes">{String(timeLeft.minutes).padStart(2, "0")}</span>
      <span>:</span>
      <span className="timer__number timer__number--seconds">{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
  );
};

export default Timer;
