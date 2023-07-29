import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"

export const WatchLater=()=>{
  const {ShowWaterLater}= useContext(DataContext)

  console.log(ShowWaterLater)
  return(
    <div>
      
    </div>
  )
}