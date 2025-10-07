import { useState } from "react";

function ListGroup() {
  const items = ["Paris", "London", "Berlin", "Madrid", "Rome"];

  // Hook: tells React that this component will have state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   selectedIndex → holds the current value of the state. Initially -1.
  //   setSelectedIndex → is a function you call to update the value.

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
