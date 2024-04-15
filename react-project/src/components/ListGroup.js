import React from "react";

function ListGroup() {
  const items = ["India", "China", "Srilanka", "USA"];

  const handleClick = (event) => console.log(event);
  return (
    <>
      <h1>List Group</h1>
      {/* {items.length === 0 ? <p>No Items Found</p> : null} */}
      {items.length === 0 && <p>No Items Found</p>}
      {/* a concise way to write the same */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
