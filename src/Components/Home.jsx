import { useEffect, useState } from 'react';
import { NavBar } from './NavBar'



export const Home = () => {
    
       
    const [imageIndex, setImageIndex] = useState(0);
  const images = ['public/1.png', 'public/2.png', 'public/3.png', 'public/4.png', 'public/5.png', 'public/6.png'];
    
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex]);












  return (
    <>
      <NavBar />
      <section className="home">
        <div className="home__content">
            <p className="home__paragraph">RENTAMOS SIN AVAL</p>

            <h1 className="home__title">
                DEPARTAMENTOS<img className="home__image-desktop" src={images[imageIndex]} alt="rectangle" /><br />BOUTIQUE  AMUEBLADOS
            </h1>
            {/* <div className="home-img-content"> */}
              <img className="home__image-movil" src={images[imageIndex]} alt="image" />
            {/* </div> */}
            <div className="home__content-second">
                <p className="home__subtitle">Te ofrecemos los mejores alojamientos para brindarte una<br /> 
                gran experiencia en tu próxima visita a Ciudad de México.</p>
                <button className="home__button">
                    VER DEPARTAMENTOS
                    <img src="public/arrow.svg" alt="Arrow Icon" className="home__arrow-icon"></img>
                </button>
            </div>
        </div>
      </section>
    </>
  );
}
