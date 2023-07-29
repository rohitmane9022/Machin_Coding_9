import { useState } from "react"
import Nav from "../../Components/Nav"
import { categories } from "../../Data/Category"

import { Category } from "../../Components/Category/Category"

export const Home=()=>{
 const [ShowCategory,setShowCategory]= useState(categories)
  return(
    <div>
     <Nav/>
    {
      ShowCategory.map((categories)=>{
       return <Category categories={categories} key={categories._id}/>
      })
    }
    </div>
  )
}