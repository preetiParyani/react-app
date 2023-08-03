import Message from "./components/Message";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <Message />
      <ListGroup />
    </>
  );
}

export default App;
// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["India", "M.P.", "U.P.", "Gujarat", "maharashtra"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );

// import ShoppingList from "./App.1";
// import bookStore from "./App.1";

// // }
// export const products = [
//   { title: "Cabbage", isFruit: false, id: 1 },
//   { title: "Garlic", isFruit: false, id: 2 },
//   { title: "Apple", isFruit: true, id: 3 },
// ];

// export default ShoppingList;

// export const books = [
//   { bookName: "The Indian Girl", bookId: 1 },
//   { bookName: "broken Heart", bookId: 2 },
//   { bookName: "soul", bookId: 3 },
//   { bookName: "Apple", bookId: 4 },
// ];

// export default bookStore;
