import React,{ useState, useEffect } from "react";
import "./App.css";
import Player from "./Player";
import SongList from "./SongList";
// import  { useState, useEffect } from "react";
import sanityClient from "./Client";

const MusicPlayer = () => {
    // const [upload, setupload] = useState(null);
    // useEffect(() => {sanityClient.fetch(
    //     `*[_type == "upload"]{
    //         songName,
    //         aritst,
    //         image{
    //           asset->{
    //             _id,
    //             url
    //           },
    //         },
    //         Musicuplo{
    //             asset->{
    //                 _id,
    //                 url
    //               },
    //         }
            
    //       }`
    // ).then((data)=>setupload(data)).catch(console.error);}, []);
    return (
        
        <React.Fragment>
            <Player />
            <SongList />
            {/* <div style={{clear:'both'}}>Below</div> */}
            {/* <div >
           
                {upload &&upload.map((up) =>(
                    <div style={{float:'right'}}>
                        <h3><span>Song name: </span>{up.songName}</h3>
                        <h4><span>Artist: </span>{up.aritst}</h4>
                        <img src={up.image.asset.url}  width="20%" />
                        
                    </div>
                ))
                }
            </div> */}
        </React.Fragment>
        
      
        
        
    );
};
export default MusicPlayer;
