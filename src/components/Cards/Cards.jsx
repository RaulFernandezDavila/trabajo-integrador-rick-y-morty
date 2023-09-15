import Card from '../Card/Card.jsx';


 const Cards= ({characters,onClose})=> {
   return(
   <div style={{display:"flex",justifyContent:'space-between'}}>

      {characters.map(({id,name,species,gender,image,status,origin})=>{
         return <Card
         id={id}
         key={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         status={status}
         onClose={onClose}
         origin={origin.name}
         />
      }
      )
      }


   </div >
   )
}


export default Cards;
