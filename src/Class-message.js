import React, { Component } from 'react'

export default class ClassMessage extends Component {
  render() {
    return (
        <div>  
        <h1> Class component {this.props.name}</h1>
    </div>
    )
  }
}
