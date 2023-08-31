import React, { Component } from 'react';

import { MovieList } from '../components/MovieList';
import { SearchForm } from '../components/SearchForm';
import { Title } from '../components/Title';

import '../css/Home.scss'
export class Home extends Component {

    state = { usedSearch: false, results: [], totalResults:"0",inputMovie:""}
    
    _handleResults = (results,totalResults,inputMovie) => {
        this.setState({ results, usedSearch: true ,totalResults,inputMovie})    
    }

    _renderResults = () => {
        return this.state.results.length === 0
            ? <p className="not-found">Sorry! Results not found!</p>
            : <MovieList   movies={this.state.results}  totalResults={this.state.totalResults} inputMovie={this.state.inputMovie} />
    }

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <SearchForm onResults={this._handleResults} />                     
                {(this.state.usedSearch && this.state.inputMovie !== "")
                    ? this._renderResults() 
                    : undefined
                }         
            </div>
        )
    }
}

    