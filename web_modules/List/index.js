import React, { Component } from 'react';
import Input from 'Input'

export default class List extends Component {

  static defaultProps = {
    items: []
  }

  state = {
    inputValue: ""
  }

 onInputChange  = (event) => {
    console.log(event.target.value)
      this.setState({inputValue: event.target.value})
 }

  render() {
    return (
      <div>
          <Input onChange={this.onInputChange}/>
          <ol>
          {
            this.props.items.map((res) => {
                return ( res.name && res.name.toLowerCase().search(this.state.inputValue.toLowerCase()) !=-1 &&
                        <li className="itemKinds">{res.name} </li>)
            })


          }
          </ol>
      </div>
    );
  }
}
