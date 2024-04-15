import React from "react";

function ListGroup() {
  const items = ["India", "China", "Srilanka", "USA"];

  return (
    <>
      <h1>List Group</h1>
      <ul class="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
