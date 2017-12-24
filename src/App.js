import React, { Component } from 'react';
import './App.css';
import Clock from './Components/Clock/Clock';

import Post from './Components/Post/Post';
import Displaymember from './Components/Members/displaymember';


class App extends Component {
state = {
    margins: [
        {
            "id": 2,
            "name": "Cannonball",
            "description": "Ammo for the Dwarf Cannon.",
            "members": 1,
            "type": "Ammo",
            "buy_limit": 10000,
            "guide_price": 299,
            "added": "2017-06-08 04:14:35",
            "updated": "2017-11-12 08:50:43"
        },
        {
            "id": 6,
            "name": "Cannon base",
            "description": "The cannon is built on this.",
            "members": 1,
            "type": "Range weapons",
            "buy_limit": 10,
            "guide_price": 190454,
            "added": "2017-06-08 04:14:45",
            "updated": "2017-11-12 08:50:45"
        },
        {
            "id": 8,
            "name": "Cannon stand",
            "description": "The mounting for the multicannon.",
            "members": 1,
            "type": "Range weapons",
            "buy_limit": 10,
            "guide_price": 185957,
            "added": "2017-06-08 04:14:50",
            "updated": "2017-11-07 08:44:43"
        },
        {
            "id": 10,
            "name": "Cannon barrels",
            "description": "The barrels of the multicannon.",
            "members": 1,
            "type": "Range weapons",
            "buy_limit": 10,
            "guide_price": 192606,
            "added": "2017-06-08 04:14:56",
            "updated": "2017-11-12 08:50:50"
        }
    ]
}


  render() {
    return (
       <div>
           <h1>This is my margin blog!</h1>
         <hr />
           {this.state.margins.map( margins => {
               return <Post name={margins.name} buy_limit={margins.buy_limit} guide_price={margins.guide_price}  /> <Displaymember />
           }
           )}
           <hr />

         <hr />
         <Clock />
       </div>

    );
  }
}

export default App;
