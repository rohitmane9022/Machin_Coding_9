export const Category=({categories})=>{
 
  return(
    <div>
      <img src={categories.thumbnail} alt={categories.thumbnail} width="150px"/>
      <h3>{categories.category}</h3>
    </div>
  )
}