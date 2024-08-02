import { useState } from "react";
import Header from "./components/Header";
import ListArea from "./components/ListArea";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
function App() {
  const [items , setItems] = useState([]);
 function handleAddItems(item){
  setItems((items=>[...items , item]));
 }
  return (
    <>
    <Header />
    <Nav handleAddItems = {handleAddItems} />
    <ListArea items = {items} />
    <Footer items ={items} />
   
    </>
  );
}

export default App;
