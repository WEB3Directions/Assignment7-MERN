import React, { useState } from "react";
import { Input_Field } from "./Input_Feidl";
 

const ToDo_List = () => {
  const [todoItems, setTodoItems] = useState({});

  const addItems = () => {
    setTodoItems((prevItems) => ({ ...prevItems, [Date.now()]:todoItems }));
  };

  const userDataHandle = (val, key) => {
    const obj = { ...todoItems };
    obj[key] = val;
    setTodoItems(obj);  
  };

  const deleteItems = () => {
    setTodoItems({});
  };

  return (
    <div>
      <div className="main">
        <h1>TODO LIST</h1>
        <div>
          <Input_Field
            id="title"
            placeholder="Add Title"
            type="text"
            onChangeHandle={(val) => userDataHandle(val, "title")}
          />
          <Input_Field
            id="description"
            placeholder="Add Description"
            type="text"
            onChangeHandle={(val) => userDataHandle(val, "description")}
          />
          <button onClick={addItems}>Add Items</button>
          <button onClick={deleteItems}>Delete All</button>
        </div>
      </div>

      <div>
        {Object.entries(todoItems).map(([key, item]) => (
          <div key={key}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ToDo_List };
