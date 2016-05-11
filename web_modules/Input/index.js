import React, { Component, PropTypes} from 'react';

 export default class Input extends Component {

  //  handleChange  = (event) => {
  //    console.log(event.target.value);
  //   //  this.setState({value: event.target.value});
  //  }

  static propTypes = {
    onChange : PropTypes.func
  }

   render() {
        
     return (
       <input
          type="text"
          name="dfddfdf"
          onChange={this.props.onChange}
        />
     );
   }
 }
