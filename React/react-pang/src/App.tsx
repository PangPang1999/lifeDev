import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  return (
    <div>
      {/* 默认 */}
      <BsFillCalendarFill />

      {/* 定制大小与颜色 */}
      <BsFillCalendarFill size={24} color="red" />

      {/* 使用 className / style */}
      <BsFillCalendarFill className="icon" style={{ marginLeft: 8 }} />
    </div>
  );
}

export default App;
