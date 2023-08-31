import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';

const API_KEY = '14aa8506'

export class Page extends Component{

    state = {
        inputMovie : ""
    }

    static propTypes = {
        inputMovie: PropTypes.string,
        totalResults: PropTypes.string
    }

    _handleChangePage = (e,page) => {
        const {inputMovie} = this.props
        this.setState({inputMovie})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}&page=${page}`)
            .then(res => res.json())
            .then(results => {
                const {Search = [], totalResults = "0"} = results          
                this.props.onResults(Search,totalResults,page,inputMovie)
            })
    }

    render(){
        const {totalResults} = this.props;
        let pageTotal = Math.floor(totalResults/10);
        return(
            <div>
                <Pagination count={pageTotal} color="primary" className='Pagination' onChange={this._handleChangePage} /> 
            </div>
        )
    }
}