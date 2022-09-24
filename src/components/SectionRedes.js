import React from 'react';
import red from     '../asset/Images/red.jpg'
import red2 from     '../asset/Images/red2.jpg'
import red3 from     '../asset/Images/red3.jpg'
import red4 from     '../asset/Images/red4.jpg'
import '../styles/_SectionRedes.scss';

const Redes = () => {
    return (
    <section className='SectionRedes'>
      <span>INSTAGRAM</span>
      <h2>#ESPUFI</h2>
        
      <img src={red} className="col col-md-3" alt="..." />
      <img src={red2} className="col col-md-3" alt="..." />
      <img src={red3} className="col col-md-3" alt="..." />
      <img src={red4} className="col col-md-3" alt="..." />
      <img src={red3} className="col col-md-3" alt="..." />
      <img src={red4} className="col col-md-3" alt="..." />
      <img src={red} className="col col-md-3" alt="..." />
      <img src={red2} className="col col-md-3" alt="..." />



    </section>
  );
};
       

export default Redes;

