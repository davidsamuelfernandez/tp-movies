import React from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
import '../css/NotFound.css'

export const NotFound = () => (
  <div>
    <h1 className="text-404 ">404</h1> 
    <section className="page_404"> 
        <div className="four_zero_four_bg"></div>        
        <div className="contant_box_404">   
          <p className="page_not_exist">No existe la página</p>
          <ButtonBackToHome/>
       </div>
    </section>
  </div>
)
