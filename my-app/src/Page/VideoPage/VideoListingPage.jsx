import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"

import { Video } from "../../Components/Videos/videos"

export const VideoListener=()=>{
  const {ShowVideo}= useContext(DataContext)
  


  return(
    <div>
      {
        ShowVideo.map((videos)=> {
          return <Video videos={videos} src={videos.src}/>
        })
      }
    </div>
  )
}