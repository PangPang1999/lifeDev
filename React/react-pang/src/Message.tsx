let count = 0;

function Message() {
  console.log("Message rendered: " + count);
  count++;
  return <h1>Message {count}</h1>;
}

export default Message;
