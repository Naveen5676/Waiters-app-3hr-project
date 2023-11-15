import React, { useState } from "react";
import Form from "./Components/Form";
import Display from "./Components/Display";

function App() {
  const [formSubmitFlag, setFormSubmitFlag] = useState(false);

  const onAddItem = (id, price, dish, table) => {
    const itemobj = {
      id, price, dish, table
    };

    const itemobjstringify = JSON.stringify(itemobj);

    localStorage.setItem(id, itemobjstringify);
    // Update the formSubmitFlag to trigger a re-render in Display
    setFormSubmitFlag(!formSubmitFlag);
  };

  return (
    <div>
      <Form onAddItem={onAddItem} />
      <Display formSubmitFlag={formSubmitFlag} />
    </div>
  );
}

export default App;
