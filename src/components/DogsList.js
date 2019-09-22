import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class DogsList extends Component {

  render() {
    const dogBreeds = this.props.dogBreeds.dogsList
    
    console.log('dogBreeds in visualiser', dogBreeds)
    return (
      <div className="dogs-list">
        <button><Link to="/">Go to main page</Link></button>
        <h1>Dogs List</h1>
        { dogBreeds === null && 'Loading...' }
        { dogBreeds &&
          <ul>{ dogBreeds.map(breed => 
            <li key={breed}>
              <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
            </li>
            )}
          </ul> 
        }
      </div>
    )
  }
}
