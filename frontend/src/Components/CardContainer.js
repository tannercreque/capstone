import React, { Component } from 'react'
import './Cards.css';
import CardItem from './CardItem';

export default class CardContainer extends Component {

  state = {
    scripts: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/scripts/')
      .then(response => response.json())
      .then(scripts => this.setState({scripts}))
  }

  render() {
    return (
    <div className='cards'>
      <h1>My first scripts!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {this.state.scripts.map(script => {
            return <CardItem script={script} image={script.image} key={script.id} description={script.description} name={script.name}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}