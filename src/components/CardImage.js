import React from 'react'

const CardImage = ({imagen}) => {
  return (
    <div className="cardContenedor">
              
    <img src={imagen} className="tarjeta" alt="..." />


</div>
  )
}

export default CardImage