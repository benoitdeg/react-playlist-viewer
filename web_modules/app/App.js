import React, { Component } from 'react';
import Artist from 'Artist'
import Kinds from 'Kinds'
import List from 'List'

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

const kindsArray = Object.keys(kinds).map((k) => {
  return kinds[k]
});

export default class App extends Component {

  render() {


    return (
      <div>
      <List items={artists} type=1/>
      <List items={kindsArray} type=0 />
      </div>
    );

  }
}
