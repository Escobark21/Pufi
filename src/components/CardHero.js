import React from 'react'

const CardHero = ( { image, tittle, parraf, ancla}) => {
  return (
    <div className="cardContenedor cardText">
              
    <img src={image} className="tarjetaText" alt="..." />
     <hr  className='line'/>

    <h2> {tittle}</h2>
    <p>{parraf}</p>
    <a href='/'>{ancla}</a>


</div>
  )
}

export default CardHero