import React, { Component } from 'react'
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';
export default class CardContainer extends Component {

  state = {
    scripts: []
  }

fetchScriptsAxios = () => {
  this.setState({...this.state, isFetching: true});
  axios.get("http://localhost:3000/scripts")
  .then(response => {
    this.setState({scripts: response.data, isFetching: false})
  })
  .catch(exception => {
    console.log(exception)
    this.setState({...this.state, isFetching: false})
  })
}

  fetchScripts = this.fetchScriptsAxios


  render() {
    return (
    <div className='cards'>
      <h1>Lua!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {this.state.scripts.map(script => {
            return <CardItem link={script.link} script={script} image={script.image} key={script.id} description={script.description} title={script.title}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}