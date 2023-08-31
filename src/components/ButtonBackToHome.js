import React from 'react'
import {Link} from 'react-router-dom'
import '../css/ButtonBack.scss'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
export const ButtonBackToHome = () => (
    <Link className="back"  to="/">  
        <HomeOutlinedIcon />
    </Link>
)


