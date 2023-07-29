import { useContext, useState } from "react"
import { videos } from "../../Data/Video"
import { DataContext } from "../../Context/DataContext"
import { NavLink } from "react-router-dom"

export const Category=({categories},key)=>{

// JUST CHECKING IS WORKING OR NOT //
//  const [ShowVideo,setVideo]= useState([])
// const handle=(categories)=>{
//   const updateValue= videos.filter((get)=> get.category=== categories.category)
//   setVideo(updateValue)
// }

const {handle}= useContext(DataContext)

  return(
    <div>
      <NavLink to="/video">
      <div onClick={()=> handle(categories)} key={key._id}>
      <img src={categories.thumbnail} alt={categories.thumbnail} width="150px"/>
      <h3>{categories.category}</h3>
      
      </div>
      </NavLink>
    </div>
  )
}