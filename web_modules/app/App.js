import React, { Component } from 'react';
import Artist from 'Artist'
import Kinds from 'Kinds'

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

export default class App extends Component {

  render() {
    return (
      <div>
      <ol className="artist"> {
          artists.map(function(result) {
            return <Artist name={result.name} />;
          })
        }
      </ol>
      <ol className="kind"> {
          Object.keys(kinds).map(function(kind) {
            return <Kinds name={kind} />;
          })
        }
      </ol>
      </div>
    );

  }
}
