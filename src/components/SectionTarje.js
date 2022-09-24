import React from 'react';
import card1 from '../asset/Images/card1.jpg'
import card3 from '../asset/Images/card3.jpg'
import card4 from '../asset/Images/card4.jpg'
import card8 from '../asset/Images/card8.jpg'
import card9 from '../asset/Images/card9.jpg'
import card2 from '../asset/Images/card2.jpg'
import card5 from '../asset/Images/card5.jpg'
import card7 from '../asset/Images/card7.jpg'
import '../styles/setionTarjeta.scss'
import CardHero from './CardHero';
import CardImage from './CardImage';

const SectionTarje = () => {
    return (

        <div className='cardInner'>
            <div className="cardContenedor cardButton"> 
                    <img src={card4} className="tarjeta " alt="..." />
                    <a className='cardButtona'>SHOP</a>    
            </div>
            <CardHero image={card1} tittle={'RAIN PUFI'} parraf={'Descripción del producto. Este es un texto simulado'} ancla={'> VER MÁS'} />
            <CardHero image={card2} tittle={'PUFI PUFF'} parraf={'Descripción del producto. Este es un texto simulado'} ancla={'> VER MÁS'} />
            <CardImage imagen={card3}/>
            <CardImage imagen={card9}/>
            <CardHero image={card7} tittle={'PUFI CART'} parraf={'Descripción del producto. Este es un texto simulado'} ancla={ '> VER MÁS'} />
            <CardHero image={card5} tittle={'PUFI NAP'} parraf={'Descripción del producto. Este es un texto simulado'} ancla={'> MÁS INFO'} />
            <CardImage imagen={card8}/>

        </div>


    );
}

export default SectionTarje;
