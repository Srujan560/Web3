import sanityClient from "../Client";
import React, { useState, useEffect } from "react";
import Tranfser from '../TestTranf';
import Audio from "../useAblePlayer";
import { ethers } from "ethers";

//https://stackoverflow.com/questions/62387887/issue-with-pausing-audio-in-howler-and-react
//https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react


function ExlporePage() {

    const [upload, setupload] = useState(null);
    const [cart, setCart] = useState([]);
    const [cost, setCost] = useState(0);
    const costCal = () => {
        setCost(cost + .01);
    };



    function addItemToCart(e) {
        const item = e.target.value;
        console.log(item);
        setCart([...cart, item]);
        costCal();
    }

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "upload"]{
            songName,
            aritst,
            image{
              asset->{
                _id,
                url
              },
            },
            Musicuplo{
                asset->{
                    _id,
                    url
                  },
            }
            
          }`
        ).then((data) => setupload(data)).catch(console.error);
    }, []);
    return (
        <body class="exploreBoady">
            <div class="helperShoopingCartDiv">
                <div class="shopingCart" >

                    {cart.map(item => <li key={item}>{item}</li>)}
                    <span>Cost: {cost}<b>ETH</b></span>
                    {/* <button >Tranfser</button> */}
                    <Tranfser cost={cost} />


                </div>
            </div>
            <div class="exploreMain">

                {upload && upload.map((up) => (
                    <div class="explore">
                        <h3 class="songtile"><span>Song name: </span>{up.songName}</h3>
                        <h4><span>Artist: </span>{up.aritst}</h4>
                        <img src={up.image.asset.url} width="100vw" height="100vh" />
                        {/* <p>Hi play this:<audio><source src={up.Musicuplo.asset.url}></source>Hello</audio></p> */}
                        {/* <p>{up.Musicuplo.asset.url}</p> */}
                        {/* <audio src={up.Musicuplo.asset.url}></audio> */}
                        {/* <Audio>{up.Musicuplo.asset.url}</Audio> */}
                        <p></p>
                        <span>Press Play</span>
                        <Audio myUrl={up.Musicuplo.asset.url} />
                        <button value={up.songName} onClick={addItemToCart}>Add to Cart</button>

                    </div>
                ))
                }
            </div>

        </body>
    );
}
export default ExlporePage;
