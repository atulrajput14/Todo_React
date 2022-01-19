import React, {useState} from 'react';
import ToDoList from "./ToDoList.js";

 const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItem = () => {
      setItems((oldItems) => {
        return [...oldItems, inputList]
      });
      setInputList("");
  };
  const deleteItem = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index)=>{
        return index !==id;
      })
    })
  };

  return <>
  <div className="main_div">
    <div className="center_div">
      <br />
      <h1>Todo List</h1>
      <br />
      <input type="text" placeholder="Add a Items"
      value={inputList}
       onChange={itemEvent} />
      <button onClick={listOfItem}> + </button>

      
      <ol>
        {/* <li>{inputList}</li> */}
        {Items.map((itemval, index) => {
          return <ToDoList
          key={index}
          id={index}
          text={itemval}
          onSelect={deleteItem}
          />;
        })}
      </ol>
    </div>
  </div>
  </> ;

 };

export default App;
