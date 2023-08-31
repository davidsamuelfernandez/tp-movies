import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/ButtonBackToHome';
import '../css/Detail.scss'
const API_KEY = '14aa8506'

export class Detail extends Component{
    static propTypes = {
        match:PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }

    state = {movie:{}}

    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {           
                this.setState({movie})               
            })
    }

    _goBack(){
        window.history.back()
    }

    componentDidMount(){
        const {id} = this.props.match.params
        this._fetchMovie({id})
    }

    render(){
        const { 
            Actors,
            Awards,
            Country,
            Director,
            Genre,
            imdbRating,
            Language,
            Plot,
            Poster,
            Production,
            Released,
            Runtime,
            Title,
            Writer,
            Year
        } = this.state.movie        
        return(
            
        <div className="detail">              
            <div className="detail-text">
                <div className="portada" style={{backgroundImage: `url(${Poster})`}}> </div>
                <div className="title-total">   
                    <h3>{Title} ({Year})</h3>            
                    <div className="desc">{Plot}</div>
                    <section>
                        <details>  <summary>Released</summary>  <p>{Released}</p> </details>
                        <details>  <summary>Production</summary>  <p>{Production}</p> </details>
                        <details>  <summary>Director</summary>  <p>{Director}</p> </details>
                        <details>  <summary>Writer</summary>  <p>{Writer}</p> </details>
                        <details>  <summary>Actors</summary>  <p>{Actors}</p> </details>
                        <details>  <summary>Language</summary>  <p>{Language}</p> </details>
                        <details>  <summary>Country</summary>  <p>{Country}</p> </details>
                        <details>  <summary>Duration</summary>  <p>{Runtime}</p> </details>
                        <details>  <summary>Genre</summary>  <p>{Genre}</p> </details>
                        <details>  <summary>Awards</summary>  <p>{Awards}</p> </details>
                        <details>  <summary>Rating</summary>  <p>{imdbRating}</p> </details>                      
                    </section>
                    <div className="botton-back">
                            <ButtonBackToHome/> 
                    </div>
                </div>
            </div>                    
        </div>
        )
    }
}






