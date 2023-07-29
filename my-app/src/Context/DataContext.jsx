import { createContext, useState } from "react"
import { videos } from "../Data/Video"


export const DataContext=createContext()


export const DataProvider=({children})=>{

  const [ShowVideo,setVideo]= useState([])
  const [indiviualVidoe,setindiviualVidoe]= useState({})
  const [ShowWaterLater,setShowWaterLater]= useState({})
  const handle=(item)=>{
    const updateValue= videos.filter((get)=> get.category=== item.category)
    setVideo(updateValue)
  }
  const handleVideo=(items)=>{
    setindiviualVidoe([items])
  }

  const WatchLater=(item)=>{
    setShowWaterLater([item])
  }
  return(
   <DataContext.Provider value={{ShowVideo,handle,handleVideo,indiviualVidoe,WatchLater,ShowWaterLater}}>
    {children}
   </DataContext.Provider>
  )
}