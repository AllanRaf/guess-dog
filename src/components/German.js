import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class German extends React.Component {

    render() {
        return(
            <div>
                <h1>Error 404</h1>
                <h2>Entschuldigung, diese Feature ist noch nicht verfügbar, bitte in Jahr 2020 zürückkommen</h2>
                <Link to="/"><button>Zürück zur Main Page</button></Link>
            </div>    
        )
    }
}
