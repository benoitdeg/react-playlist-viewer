import React, { Component } from 'react';

export default class List extends Component {

  static defaultProps = {
    items: []
  }

  render() {

    console.log(this.props.items);
    return (
      <div> <ol className="artist">
      {
        this.props.items.map(function(res) {
          return <li className="itemKinds">{res.name} </li>;
        })
      }
      </ol>
      </div>
    );
  }
}
