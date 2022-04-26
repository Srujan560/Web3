import React from "react";

function playertwo(props) {
  return (
    <div className="p-playerone--two">
      <div className="two-img">
            <img src={props.song.img_src} alt="Image"/>
        </div>
        <h3 className="two-title">{props.song.title}</h3>
        <h4 className="two-artist">{props.song.artist}</h4>

    </div>
    
    )
}

export default playertwo;