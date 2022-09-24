import React from 'react';
import { FaLeaf, FaPlane, FaSnowflake, FaShoppingBasket,FaChevronDown } from "react-icons/fa";


const Nav = () => {
    return (
        <div className='Nav'>
            <nav >
                <div className='logo'>
                    <h1>PUFI</h1>
                </div>
                <div> 
                <ul className='ul-items'>
                    <li className='li-items'>
                        
                        <a href='/'><FaLeaf className='icons' /> PUFI PUFF</a>
                       
                        <a href='/'> <FaSnowflake className='icons' />PUFI RAIN</a>
                       
                        <a href='/'> <FaShoppingBasket className='icons' />PUFI CART</a>
                       
                        <a href='/'> <FaPlane className='icons'/>PUFI NAP</a>
                    </li>
                </ul></div>

                <div>
                    <ul className='ul-items'>
                        <li className='li-items'>
                        <FaChevronDown/>
                        <a href='/'>MI CUENTA </a>
                        <a href='/'>MI COMPRA </a>
                        </li>
                    </ul>
                </div>


            </nav>
        </div>
    );
}

export default Nav;
