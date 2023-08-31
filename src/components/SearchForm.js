import React, { Component } from 'react';
const API_KEY = '14aa8506'

export class SearchForm extends Component {

    state = {
        inputMovie:'',
    }

    _handleChange = (e) => {
        let element = e.target.value
        this.setState({inputMovie:element})
    }
    _handleSubmit = (e) => {
        e.preventDefault() //evitar que se ejecute el evento nativo que se ejecuta cuando se hace submit en el formulario
        const {inputMovie} = this.state
        
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const {Search = [], totalResults = "0"} = results       
                this.props.onResults(Search,totalResults,inputMovie)
            })
    }

    render(){
        return( 
            <form onSubmit={this._handleSubmit} className="search-bar">
                <input className="search-input" onChange={this._handleChange} type="text" pattern=".*\S.*" required></input>
                <button className="search-btn"></button>
            </form>          
        )
    }
}

