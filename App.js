import {useState,useEffect} from "react";
import Playerone from "./parts/Playerone";

function App() {
  const[songs] = useState([
    {
      title: "Trampoline",
      artist: "Zayn X Shaed",
      img_src: "./image/song.jpg",
      src: "https://cdn.sanity.io/files/88ktahmh/production/fcd78a18254d859fcb5d626c94a587b83eac8989.mp3",
    },
    {
      title: "All for nothing",
      artist: "Lauv",
      img_src: "./image/laone.PNG",
      src: "./music/lauv.mp3",
    },
    {
      title: "2011",
      artist: "5 Second of Summer",
      img_src: "./image/songsos.jpg",
      src: "./music/sos.mp3",
    },
  ]);
  const [current, setcurrent] = useState(0);
  const [next, setnext] = useState(0);

  useEffect(() => {
    setnext(() => {
      if(current +1 > songs.length -1) {
        return 0;
      } else {
        return current + 1;
      }
        
    });
  }, [current]);
  return (
    <div className="App">
      <Playerone 
       current = {current}
       setcurrent = {setcurrent}
       next = {next}
       songs = {songs}
      />
    </div>
  );
}

export default App;
