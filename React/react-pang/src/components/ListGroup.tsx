function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  items = [];

  const emptyHint = items.length === 0 ? <p>No item found</p> : null;
  const emptyHint2 = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <h1>List</h1>

      {emptyHint}
      {emptyHint2()}

      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
