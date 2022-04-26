import React, {useState, useEffect, useRef} from "react";
import Playertwo from "./Playertwo";
import Playerthree  from "./Playerthree";

function Playerone(props) {
    const audioEl = useRef(null);
    const [audible, setaudible] = useState(false);
    useEffect(() => {
        if (audible){
           audioEl.current.play();
        } else {
           audioEl.current.pause();
        }
    });

    const miss = (forwards = true) => {
        if (forwards){
            props.setcurrent(() => {
                let temp = props.current;
                    temp++;
                    if (temp > props.songs.length - 1){
                        temp = 0;
                    }
                    return temp;
                });
            } else{
                props.setcurrent(() => {
                    let temp = props.current;
                    temp--;
                    if (temp < 0 ){
                        temp = props.songs.length - 1;
                    }

                    return temp;
                 });

            }
    }
  return (
    <div className="p-playerone">
        <audio src = {props.songs[props.current].src}  ref={audioEl}></audio>
        <h3>PLAYING FROM</h3>
        <h3>Library</h3>
        <Playertwo song={props.songs[props.current]}/>
        <Playerthree
        audible={audible}
        setaudible = {setaudible}
        miss = {miss}
        />
        <p>Next : {props.songs[props.next].title} by {props.songs[props.next].artist}</p>
    </div>
  )
}

export default Playerone;