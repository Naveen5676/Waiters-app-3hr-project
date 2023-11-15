import React, { useEffect, useState } from "react";

const Display = (props) => {
  // State to track stored items
  const [storedItems, setStoredItems] = useState([]);

  // Function to retrieve items from localStorage and update the state
  const updateStoredItems = () => {
    const keys = Object.keys(localStorage);
    const items = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    setStoredItems(items);
  };

  // useEffect to run the updateStoredItems function when formSubmitFlag changes
  useEffect(() => {
    updateStoredItems();
  }, [props.formSubmitFlag]);



   // Function to handle item deletion
   const handleDelete = (uid) => {
    localStorage.removeItem(uid);
    updateStoredItems(); // Update the state after deletion
  };

  return (
    <div>
      <h1>Orders</h1>
      <h2>Table 1</h2>
      <ul>
        {storedItems
          .filter((storedItem) => storedItem.table === "table1")
          .map((item) => (
            <li key={item.id}>
              Product Id: {item.id}, Selling Price: {item.price}, Product
              Name: {item.dish}, Category: {item.table}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
      </ul>

      <h2>Table 2</h2>
      <ul>
        {storedItems
          .filter((storedItem) => storedItem.table === "table2")
          .map((item) => (
            <li key={item.id}>
              Product Id: {item.id}, Selling Price: {item.price}, Product
              Name: {item.dish}, Category: {item.table}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
      </ul>

      <h2>Table 3</h2>
      <ul>
        {storedItems
          .filter((storedItem) => storedItem.table === "table3")
          .map((item) => (
            <li key={item.id}>
              Product Id: {item.id}, Selling Price: {item.price}, Product
              Name: {item.dish}, Category: {item.table}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Display;
