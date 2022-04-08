import sanityClient from "../Client";
import React, { useState, useEffect} from "react";

import Audio from "../useAblePlayer";


function ExlporePage() {
    const [upload, setupload] = useState(null);
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
            <div class="exploreMain">

                {upload && upload.map((up) => (
                    <div class="explore">
                        <h3 class="songtile"><span>Song name: </span>{up.songName}</h3>
                        <h4><span>Artist: </span>{up.aritst}</h4>
                        <img src={up.image.asset.url} width="100vw" />
                        {/* <p>Hi play this:<audio><source src={up.Musicuplo.asset.url}></source>Hello</audio></p> */}
                        {/* <p>{up.Musicuplo.asset.url}</p> */}
                        {/* <audio src={up.Musicuplo.asset.url}></audio> */}
                        {/* <Audio>{up.Musicuplo.asset.url}</Audio> */}
                        <p></p>
                        <span>Press Play Hi</span>
                        <Audio myUrl={up.Musicuplo.asset.url}/>

                    </div>
                ))
                }
            </div>
        </body>
    );
}
export default ExlporePage;
