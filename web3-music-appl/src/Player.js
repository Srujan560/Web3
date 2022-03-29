import React, {Component} from  "react";
import {Howl} from "howler";
import {Button} from "react-bootstrap"
const buttonCenter = {
    width: "40vw",
    height: "10vh",
    fontSize: "2vh",
    padding: "0px",
    border: ".75vh solid",
    borderRadius: 100,
    fontFamily: 'Inconsolata'
  };

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
            return(
            <center>
                <div>
                    <h3 style={{fontFamily: 'Inconsolata', marginTop:"5vh"}}>{soundObj.name}</h3>
                    <Button style={buttonCenter} variant="outline-dark" key={index} onClick={()=> this.soundplay(soundObj.url)}> ID:{soundObj.id} Name:{soundObj.name}  Author:{soundObj.author}</Button>
                </div>
            </center>
            )
        }
        )
    }

    render(){
    return(<center>
        <div className="player">
            
            <h1 style={{fontSize: "4em"}}> Player</h1>
            <p>{this.renderButtonSound()}</p>
        </div>
        </center>
    );

}
}
export default Player;