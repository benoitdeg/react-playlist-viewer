import React, { Component } from 'react';
import Artist from 'Artist'
import Kinds from 'Kinds'
import List from 'List'
import Input from 'Input'

const artists = [
  {name:"Bob Marley"},
  {name:"Bob Dylan"},
  {name:"Odezenne"},
  {name:"Kavinsky"},
]

const kinds = {
  rap:{name:"Rap"},
  rock:{name:"Rock"},
  electro:{name:"Electro"},
}

const inputName = ["searchUser"]

const kindsArray = Object.keys(kinds).map((k) => {
  return kinds[k]
});

export default class App extends Component {

  render() {
    return (
      <div>
        <div id="artists">
            <List items={artists}/>
        </div>
        <div id="kinds">
            <List items={kindsArray} />
        </div>
      </div>
    );

  }
}
