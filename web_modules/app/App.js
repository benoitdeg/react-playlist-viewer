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

const inputName = ["searchUser"]

const kindsArray = Object.keys(kinds).map((k) => {
  return kinds[k]
});




export default class App extends Component {

  state = {
    artists: []
  }

  componentDidMount() {
    fetch("https://api.spotify.com/v1/search?q=bob&type=artist").then((response) => {
      response.json().then((data) => {
        if (!data.error) {
          console.log(data.artists.items)
            this.setState({artists: data["items"]})
        }

      })
    });
  }

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
