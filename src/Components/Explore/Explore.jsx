import { useState } from "react"
import { videos } from "../../Data/Video"
import { Video } from "../Videos/videos"

export const Explore=()=>{

const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return(
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by title..."
      />
      <div>
      
         {filteredVideos.map((videos) => {
          return <Video videos={videos} src={videos.src}/>
        })}
      </div>
    </div>
  )
}