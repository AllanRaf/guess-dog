import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
  const images = props.images
  const {breed} = props

  let i = null

  if(images){
    i = Math.floor((Math.random() * images.length) - 10);
  }
  
  return (
    <div className="dog-breed-images">
    
      <button><Link to="/">Go to main page</Link></button>
      <button><Link to="/dogs">Go back to dogs list</Link></button>
      <h1>Dogs Breed Images</h1>

      This page will show images of the { breed } breed
    

      <div>
        { images && images.slice(i,i+10).map(url => <img src={ url } alt="Dog" />)     }
        { !images && 'Loading...'}
      </div>
    </div>
  )
}