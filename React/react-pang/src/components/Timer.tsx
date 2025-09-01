import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick:", Date.now());
    }, 1000);
    return () => clearInterval(id); // 清理：停止定时器
  }, []);

  return <div>Timer is running (check console)</div>;
}

export default Timer;
