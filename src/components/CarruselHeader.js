import React from 'react';
import Img4 from '../asset/Images/img4.jpg'
import Img2 from '../asset/Images/img2.jpg'
import Img3 from '../asset/Images/img3.jpg'
import Nav from './Nav';
import  '../styles/Carousel.scss'



const CarruselHeader = () => {
  return (

    <div id="carouselExampleIndicators" className="carousel slide carouselGiro" data-bs-ride="true" >
    
         <Nav />
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
      <div className="carousel-caption d-none d-md-block">
        <h1>Estár cómodo, <br /> nunca fue tan fácil.</h1>
          <button type="button" class="carouselButton ">SHOP</button>
        </div>

        <div className="carousel-item active">
          <img src={Img4} className="d-block w-100 image" alt="Playa" />
        </div>
       

        <div className="carousel-item">
          <img src={Img2} className="d-block w-100 image" alt="viajes" />
        </div>
        <div className="carousel-caption d-none d-md-block">
        <h1>Estár cómodo, <br /> nunca fue tan fácil.</h1>
          <button type="button" class="btn btn-light">SHOP</button>

        </div>
        <div className="carousel-item">
          <img src={Img3} className="d-block w-100 image" alt="sol" />
        </div>
        <div className="carousel-caption d-none d-md-block">
        <h1>Estár cómodo, <br /> nunca fue tan fácil.</h1>
          <button type="button" class="btn btn-light">SHOP</button>

        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
}

export default CarruselHeader;



