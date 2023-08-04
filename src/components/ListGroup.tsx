import { MouseEvent } from "react";

function ListGroup() {
  let listItems = [
    "Aao milo chale",
    "tumse hi",
    "kabhi alvida na kehna",
    "chand sifarish",
    "Naino ne bandhi keasi door",
  ];
  // listItems = [];

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

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
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
