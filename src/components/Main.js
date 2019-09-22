import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDogs } from '../actions/getDogs'

class Main extends Component {

  componentDidMount() {
    this.props.getDogs()
  }

  render() {
    const urlDogImage = "https://s.abcnews.com/images/US/160825_vod_orig_historyofdogs_16x9_992.jpg"
    const germanFlag = "https://www.theflagshop.co.nz/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/g/e/germanysmall.jpg"
    return (
      <div>
          <h1>Main Page</h1>
          <p>Sprache Wählen<Link to="/german"><img src = {germanFlag} width = "20px" alt = "German flag"></img> </Link></p>
          
          <Link to="/dogs"><img src ={urlDogImage} width = "200px"  alt = "dog"/></Link>
          <p>Click the image to learn about the range of dog breeds</p>
          <div>
              <Link to="/Game1"><button>Game 1</button></Link>
              <Link to="/Game2"><button>Game 2</button></Link>
              <button>Game 3</button>
              <Link to='/Credits'><footer><button>credits</button></footer></Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mainpagestate', state)
    return {
      dogsList: state
    }
  }

export default connect(mapStateToProps, { getDogs })(Main)
