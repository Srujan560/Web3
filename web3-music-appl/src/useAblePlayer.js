
import React, { Component } from "react";
import { Howl } from "howler";



var howls={}
var files=["https://cdn.sanity.io/files/88ktahmh/production/e1044d4bdc1a1d057aa88aed4abadd0aa355bc42.mp3",
"https://cdn.sanity.io/files/88ktahmh/production/58b9422bfc445ac21eb9f844e43d4ba1a70ccfea.mp3",
"https://cdn.sanity.io/files/88ktahmh/production/ed60ea330f4155463b6fd4e4256de87ca7092c6a.mp3",
"https://cdn.sanity.io/files/88ktahmh/production/e2b89d25e90d4d988c1b147439296119ec0ac6e3.mp3",
"https://cdn.sanity.io/files/88ktahmh/production/fcd78a18254d859fcb5d626c94a587b83eac8989.mp3"];


for (var i=0;i<files.length;i++){
    howls[files[i]]=new Howl({
        src:files[i],
        html5:true,
        loop:true

    })
}

class Player extends Component{

    Play(file){
        howls[file].stop();
        howls[file].play();
    }

    stop(file){

        howls[file].stop();
    }
    newSound(src){
        const sound =new Howl({
            src,
            html5:true,
            loop:true,
            volume:.5
            
        })
        return sound;
    }


    raiseVolume(file){
        howls[file].volume(1);
    }
    lowerVolume(file){
        howls[file].volume(.25);
    }


    renderButtonSound=()=>{
        
            
            
            return(
            
                <div>
                    
                    
                    <button  variant="outline-info" onClick={()=> this.Play(this.props.myUrl)}> Play</button>
                    <button  variant="outline-info" onClick={()=> this.stop(this.props.myUrl)}> Stop</button>
                    <button  variant="outline-info" onClick={()=> this.lowerVolume(this.props.myUrl)}> lower Volume</button>
                    <button  variant="outline-info" onClick={()=> this.raiseVolume(this.props.myUrl)}> raise Volume</button>
                </div>
            
            )
        
        
    }

    render(){
    return(<center>
        <div className="player">
            <div>{this.renderButtonSound()}</div>
        </div>
        </center>
    );

}
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