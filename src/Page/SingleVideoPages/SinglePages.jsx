import { useContext, useState } from "react"
import { DataContext } from "../../Context/DataContext"
import { ListingSinglePage } from "../../Components/SinglePages/ListingSinglePages"

export const SinglePage=()=>{

  const {indiviualVidoe,WatchLater}= useContext(DataContext)
  const [ItemsHere, setItemsHere] = useState("");
  const [ItemsAdd, setItemsAdd] = useState([]);

  const ItemsEvent = (e) => {
    setItemsHere(e.target.value);
  };
  const addValue = () => {
    setItemsAdd((oldItems) => [...oldItems, ItemsHere]);
    setItemsHere("");
  };

  const handleDelete = (index) => {
    const updateItems = ItemsAdd.filter((value, i) => i !== index);
    setItemsAdd(updateItems);
  };
  return(
    <div>
      {
        indiviualVidoe.map((videos)=> {
          return <ListingSinglePage videos={videos}/>
        })
      }
      <h3>My Notes</h3>
      <input
        type="text"
        placeholder="Add Note"
        value={ItemsHere}
        onChange={ItemsEvent}
      />
      
      <button  onClick={addValue}>Add New Notes</button>
      
      {ItemsAdd.map((value, index) => (
          <p key={index}>
           {value}
            <button onClick={() => handleDelete(index)}>remove</button>
            
          </p>
        ))}
        
    </div>
  )
}