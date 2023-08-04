// import { MouseEvent } from "react";
//when we learned handle click function we needed the handleClick function and the this mouseevent too but know we don't need it so commenting out it.

import { useState } from "react";

function ListGroup() {
  let listItems = [
    "Aao milo chale",
    "tumse hi",
    "kabhi alvida na kehna",
    "chand sifarish",
    "Naino ne bandhi keasi door",
  ];
  //we want to keep updation the value of selectedIndex which its possible just by declaring a function so commenting it out.
  // let selectedIndex = 0;

  //to keep the selectedIndex updated we have to use a hook named useState
  //A hook enables us to tap into the built-in function in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // listItems = [];

  //event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    return listItems.length === 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>lyrics</h1>
      {getMessage()}
      {/* <ul className="list-group">
        <li className="list-group-item">kitne</li>
        <li className="list-group-item">dafe</li>
        <li className="list-group-item">dil</li>
        <li className="list-group-item">ne</li>
        <li className="list-group-item">kaha</li>

        <li className="list-group-item">
          <b>kuch samaj aya konsa gaana hai?</b>
        </li>
      </ul> */}

      {/* By the above way we can hard code a list but its being difficult if the list contains more number of elementsso we will try to be a little dynamic */}

      <ul className="list-group">
        {/* every item in jsx needs a key to make the browser know what part of the code is being updated
         */}
        {listItems.map((item, index) => (
          <li
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
