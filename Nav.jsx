import { useState } from "react";
function Nav({handleAddItems}) {
    const [name , setName] = useState(" ");
    const handleAddButtonClick = () => {
        //creating a newItem object with name and id properties
        const newItem = { name, id: Date.now() };
    
        //passing the newItem object into the handler function as an argument
        handleAddItems(newItem);
        // Reset the input field after adding the item
        setName("");
    };
    return (
      <>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </>
    );
  }
export default Nav;
