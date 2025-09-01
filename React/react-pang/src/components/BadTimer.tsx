import { useEffect } from "react";

export default function BadTimer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick from BadTimer", Date.now());
    }, 1000);
    // ❌ 没有清理
  }, []);

  return <div>BadTimer mounted</div>;
}
