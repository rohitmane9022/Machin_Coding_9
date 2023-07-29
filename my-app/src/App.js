import {Routes,Route} from "react-router-dom"
import './App.css';
import { Home } from "./Page/Home/Home";
import { VideoListener } from "./Page/VideoPage/VideoListingPage";
import { SinglePage } from "./Page/SingleVideoPages/SinglePages";
import { Explore } from "./Components/Explore/Explore";
import { WatchLater } from "./Page/WatchLater/WatchLater";

function App() {
  return (
    <div className="App">
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/video/" element={<VideoListener/>}/>
    <Route path="/singlepage" element={<SinglePage/>}/>
    <Route path="/explore" element={<Explore/>}/>
    <Route path="/watchlater" element={<WatchLater/>}/>
     </Routes>
    </div>
  );
}

export default App;
