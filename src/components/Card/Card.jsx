import style from "./Card.module.css";
import{Lin, Link} from 'react-router-dom';

const Card = ({id,name,status,species,gender,origin,image,onClose}) =>{

   return (
      <div className={style.container}>

         
         <button onClick={()=>onClose(id)} className={style.closeButton}>X</button>
         <div className={style.dataContainer}>
            <h2>Name:{name}</h2>
            <h4>Status:{status}</h4>
            <h4>Species{species}</h4>
            <h4>Gender{gender}</h4>
            <h4>Origin{origin}</h4>
            </div>
         
         <img  src={image} alt={name}/>
      </div>
      
   
         
         
   );
}
export default Card;