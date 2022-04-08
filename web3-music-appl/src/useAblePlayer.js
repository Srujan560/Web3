import React,{ useState, useEffect} from "react";
import { Howl } from "howler";

const soundplay = (src) => {
    const sound = new Howl({
        src,
        html5: true

    })

    sound.play();
}
    function Player(myUrl){
        
        const [isPlaying, setIsPlaying] = useState(false);

        return (
            <div>
                {/* <p>{this.renderButtonSound()}</p> */}
                <button onClick={() => this.soundplay(myUrl)}>Play</button>
            </div>

        );
}
export default Player;


















// import React, { useState, useEffect } from "react";

// const useAudio = url => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//       playing ? audio.play() : audio.pause();
//     },
//     [playing]
//   );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);

//   return (
//     <div>
//         <p>My Url is : {url}</p>
//       <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

// export default Player;