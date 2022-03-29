import React, {Component} from  "react";
import {Howl} from "howler";


const music=[
    {
        "name": "Moonlight",
        "author": "ludwig van beethoven",
        "url": "https://web3muiscbucket.s3.amazonaws.com/LudwigvanBeethovenPianoSonataNo14.mp3",
        "id": 0
    },{
        "name": "opus 9 no 2",
        "author": "frederic chopin",
        "url": "https://web3muiscbucket.s3.amazonaws.com/FredericChopinNocturneNo2Op9.mp3",
        "id": 1
    
    }
    ]

class Player extends Component{

    soundplay=(src)=>{
        const sound =new Howl({
            src,
            html5:true
            
        })

        
        
        sound.play();
    }


    renderButtonSound=()=>{
        return music.map((soundObj,index)=>{
            return(<div>
                <li >{soundObj.name}</li>
                <button key={index} onClick={()=> this.soundplay(soundObj.url)}> id:{soundObj.id} name:{soundObj.name}  Author:{soundObj.author}</button>
                </div>
                )
        }
        )
    }

    render(){
    return(
        <div className="player">
            <h1>Player</h1>
            <ul>{this.renderButtonSound()}</ul>
        </div>

    );

}
}
export default Player;