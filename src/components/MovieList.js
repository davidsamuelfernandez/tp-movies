import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Movie } from './Movie';

import '../css/CardList.css'
import { Page } from './Page';

export class MovieList extends Component{
    state = {
        inputMovie:this.props.inputMovie,
        movies:this.props.movies,
        page:1
    }

    static propTypes = {
        movies: PropTypes.array,
        totalResults: PropTypes.string,
        inputMovie: PropTypes.string
    }


    _handleResults = (movies,totalResults,page,inputMovie) => {
        if(this.state.page !== page){
            this.setState({movies,page}) 
        } 
    }


    render(){
        const {movies} = this.state      
        return(
            <div>           
                <Page inputMovie={this.props.inputMovie} totalResults={this.props.totalResults} onResults={this._handleResults}/>                                   
                <div className='MovieList'>     
                    {                
                        movies.map( movie => {
                        return ( 
                            <div key={movie.imdbID} className='MovieList-item'>
                                <Movie    
                                    id={movie.imdbID}                            
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster}
                                />
                            </div>)
                    })
                    }
                </div>                       
            </div>   
        )        
    }
}




