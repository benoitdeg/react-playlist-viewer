import React, { Component } from 'react';

 export default class Kinds extends Component {

   render() {
     return (
       <li className="itemKinds">
       {this.props.name}
       </li>
     );
   }
 }
