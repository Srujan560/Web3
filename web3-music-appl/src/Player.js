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

const h1sty = {
    fontSize: "4vw", 
    color:"#e0d9cf"
}
const h2sty = {
    fontSize:"2vw",
    color:"grey",
    paddingBottom:"1vh",
    paddingTop: "5vh"
}
const h3sty = {
    fontSize:"1vw",
    marginBottom: "5vh",
    color:"#c94242"
}

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
    var howls={}
    var files=["https://web3muiscbucket.s3.amazonaws.com/LudwigvanBeethovenPianoSonataNo14.mp3","https://web3muiscbucket.s3.amazonaws.com/FredericChopinNocturneNo2Op9.mp3"]

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
        return music.map((soundObj)=>{
            
            
            return(
            
                <div id={music.length}>
                    <h2 style={h2sty}>{soundObj.name}</h2>
                    
                    <Button style={buttonCenter} variant="outline-info" onClick={()=> this.Play(soundObj.url)}> Play</Button>
                    <Button style={buttonCenter} variant="outline-info" onClick={()=> this.stop(soundObj.url)}> Stop</Button>
                    <Button style={buttonCenter} variant="outline-info" onClick={()=> this.lowerVolume(soundObj.url)}> lower Volume</Button>
                    <Button style={buttonCenter} variant="outline-info" onClick={()=> this.raiseVolume(soundObj.url)}> raise Volume</Button>
                </div>
            
            )
        }
        )
    }

    render(){
    return(<center>
        <div className="player">
            
            <h1 style={h1sty}> Player</h1>
            <div>{this.renderButtonSound()}</div>
        </div>
        </center>
    );

}
}
export default Player;