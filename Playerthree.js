import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";

 function playerthree(props) {
  return (
    <div className="p-playerone--three">
        <button className="skip-backward" onClick={() => props.miss(false)}>
            <FontAwesomeIcon icon={faBackward}/>
        </button>
        <button className="play-swth" onClick= {() => props.setaudible(!props.audible)}>
            <FontAwesomeIcon icon={props.audible ? faPause : faPlay} />
        </button>
        <button className="skip-forward"  onClick={() => props.miss()} >
            <FontAwesomeIcon icon={faForward}/>
        </button>
      
    

</div>
  )
}

export default playerthree;