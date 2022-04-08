import React from "react";
import "./App.css";
import Player from "./Player";
import SongList from "./SongList";



const MusicPlayer = () => {
    
    return (
        
        <React.Fragment>
            <Player />
            <SongList />
            {/* <div style={{clear:'both'}}>Below</div> */}
           
        </React.Fragment>
        
      
        
        
    );
};
export default MusicPlayer;
