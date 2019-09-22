import React, { Component } from 'react'
import DogsList from './DogsList'
import { connect } from 'react-redux'
import { getDogs } from '../actions/getDogs'

class DogsListContainer extends Component {

  componentDidMount() {
    this.props.getDogs()
  }

  render() {
    console.log('state from the dogslist', this.props.dogsList)
    if(this.props.dogsList !== null) {
      return <DogsList dogBreeds={this.props.dogsList} />
    }
  }
}

  const mapStateToProps = (state) => {
    return {
      dogsList: state
    }
  }

export default connect(mapStateToProps, { getDogs })(DogsListContainer)