import React, { Component } from 'react';

 export default class Artist extends Component {

 static defaultProps = {
   name: "Bob Marley"
 }
   render() {
     return (
       <li className="itemArtist">
       {this.props.name}
       </li>
     );
   }
 }
