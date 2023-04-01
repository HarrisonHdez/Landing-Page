import { useEffect, useState } from 'react';
import { NavBar } from './NavBar'



export const Home = () => {
    

    const [imageIndex, setImageIndex] = useState(0);
  const images = ['src/images/1.png', 'src/images/2.png', 'src/images/3.png', 'src/images/4.png', 'src/images/5.png', 'src/images/6.png'];
    
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
        <div className="home-content ">
            <p className="home-first-paragraph">RENTAMOS SIN AVAL</p>

            <h1 className="home-title">
                DEPARTAMENTOS<img className="home-img" src={images[imageIndex]} alt="Rectangle" /><br />BOUTIQUE  AMUEBLADOS
            </h1>
            <img className="home-img-second" src={images[imageIndex]} alt="Rectangle" />
            <div className="home-content-second">
                <p className="home-second-paragraph">Te ofrecemos los mejores alojamientos para brindarte una<br /> 
                gran experiencia en tu próxima visita a Ciudad de México.</p>
                <button className="home-button">
                    VER DEPARTAMENTOS
                    <img src="src/images/arrow.svg" alt="Arrow Icon" className="arrow-icon"></img>
                </button>
            </div>
        </div>
      </section>
    </>
  );
}
