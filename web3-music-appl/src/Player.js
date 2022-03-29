import React, { Component } from 'react';

import FredericChopin from './FredericChopin-NocturneNo.2Op.9.mp3'
import { useEffect, useRef, useState } from "react";

const Player = ()=>{


return(<div id="Player">
<h1>Player</h1>
    
<div id='audioplayer'>
      <audio controls>
        <source src={FredericChopin} type='audio/mp3'></source>
      </audio>
    </div>
</div>

);

};

export default Player;
