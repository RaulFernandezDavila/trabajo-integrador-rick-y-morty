import { useState } from "react";
import styles from "./SearchBar.module.css";


const SearchBar =({onSearch}) =>{
   const[id,setId] = useState('');

   const handleChange = (event)=>{
      setId(event.target.value)

   };

   return (
      <div className={styles.container}>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick= {()=>{onSearch(id)}}>Agregar</button> 
      </div>
   );
}

export default SearchBar
