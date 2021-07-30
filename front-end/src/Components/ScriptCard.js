import React, { Component } from 'react'

export default class PhotoCard extends Component {
  render() {
    return (
      <div className='photo-card'>
        <img src={this.props.image} className='image'></img>
      </div>
    )
  }
}