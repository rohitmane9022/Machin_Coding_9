import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { NavLink } from "react-router-dom"

export const Video=({videos})=>{
  
  const {handleVideo,indiviualVidoe}= useContext(DataContext)
  console.log(indiviualVidoe)
  return(
    <div>
      <NavLink to="/singlepage">
     <div onClick={()=> handleVideo(videos)} key={videos._id}>
      <img src={videos.thumbnail} alt={videos.thumbnail} width="200px"/>
      <h3>{videos.title}</h3>
      <p> views {videos.views} | {videos.creator}</p>
      </div></NavLink>
    </div>
  )
}