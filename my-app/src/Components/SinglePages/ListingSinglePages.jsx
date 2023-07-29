import ReactPlayer from "react-player"

export const ListingSinglePage=({videos})=>{

  console.log(videos)
  return(
    <div>
       <ReactPlayer
      className="react-player"
      playing
      url={videos.src}
      controls
    />
    <img src={videos.thumbnail} alt={videos.thumbnail} width="70px"/>
    <h4>{videos.title}</h4>
    </div>
  )
}