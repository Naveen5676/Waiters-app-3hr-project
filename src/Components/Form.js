import React, { useState } from "react";

const Form = (props) => {
  const [id, setid] = useState("");
  const [price, setprice] = useState("");
  const [dish, setdish] = useState("");
  const [table, setTable] = useState("");

  function idChangeHandler(event) {
    setid(event.target.value);
  }

  function priceChnageHandler(event) {
    setprice(event.target.value);
  }

  function dishChangeHandler(event) {
    setdish(event.target.value);
  }

  function tableChangeHandler(event) {
    setTable(event.target.value);
  }

  function dataonSubmitHandler(e) {
    e.preventDefault();
    props.onAddItem(id, price, dish, table);
  }

  return (
    <form onSubmit={dataonSubmitHandler}>
      <label>Unique Order Id:</label>
      <input type="number"  onChange={idChangeHandler}></input>
      <label>Choose Price:</label>
      <input type="number"  onChange={priceChnageHandler}></input>
      <label>Choose Dish</label>
      <input type="text" onChange={dishChangeHandler}></input>
      <label>Choose A Table</label>
      <select  onChange={tableChangeHandler}>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
      <br />
      <br />
      <input type="submit" value="Add Product"></input>
    </form>
  );
};
export default Form;
