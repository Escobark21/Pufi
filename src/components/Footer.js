import React from 'react';
import  '../styles/Footer.scss';
import { FaFacebook ,FaShieldAlt,FaTwitter,FaInstagram,FaQrcode} from "react-icons/fa";


const Footer = () => {
    return (
        <section className='footer'>
        <h1>PUFI</h1>
        <p>
            <span>PUFI PUFF</span>
            <span>PUFI RAIN</span>
            <span>PUFI CART</span>
            <span>PUFI NAP</span>
            
        </p>
        <p>
            <span>CONTACTO</span>
            <span>AYUDA</span>
            <span>COMO COMPRAR</span>
            <span>TERMINOS & CONDICIONES</span>
            
        </p>
        <p>
            <span>COMPRA 100% SEGURA</span>
            <FaShieldAlt/>
            <FaQrcode />
            <span>COMPRÁ LA GARANTIA DE PUFI</span>
            
        </p>
        <p>
            <span>SIGUENOS</span>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram/>
            
        </p> 
            
        </section>
    );
}

export default Footer;
