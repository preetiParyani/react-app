// import { useState } from "react";
// import { books } from "./App";

// export default function App() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={"Photo of " + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//     </>
//   );
// }
// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));

// //   return <ul>{listItems}</ul>;
// // }
// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

// export default function bookStore() {
//   const bookList = books.map((book) => (
//     <>
//       <li key={book.bookId}>{book.bookName}</li>
//       <MyButton />
//     </>
//   ));

//   return <ul>{bookList}</ul>;
// }
