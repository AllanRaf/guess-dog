import React, { Component } from 'react'
import { connect } from 'react-redux';

class Credits extends React.Component {

    render() {
        return(
            <div>
                <h1>Credits</h1>
                <h2>This page was made by the incredible dog-lovers:</h2>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
      credits: state
    }
  }

export default connect(mapStateToProps)(Credits)