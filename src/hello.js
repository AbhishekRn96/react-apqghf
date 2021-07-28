import React, { Component } from 'react';
import './style.css';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [1, 2, 3]
    };
  }

  componentDidMount() {
    console.log(this.state.apiData);
  }

  render() {
    return (
      <div>
        {this.state.apiData.map((data, key) => {
          return <div key={key}>{data}</div>;
        })}
      </div>
    );
  }
}
