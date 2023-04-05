import React from 'react'

export const Gallery = () => {
  return (
    <section className="gallery-container">
      <div className="gallery">

        <div className="gallery__header">
         <div className="gallery__paragraph-content">
           <p className="gallery__paragraph">
             TODOS LOS ESPACIOS se han diseñado para ser modernos, de lujo &
             confortables, con todas las comodidades + amenidades para una estancia
             de ensueño.
           </p>
           <a className="gallery__link">
              VER SERVICIOS 
              <img src="/images/arrow-form.svg" alt="Icon" />
           </a>
         </div>
          <img className="gallery__header-image" src="/images/flower-first-gallery.svg" alt="img" />
        </div>



          <div className="galeria-container">
            <div className="galeria">
                <div className="imagen">
                    <img src="/images/gallery1.png" alt="imagen galeria"/>
                </div>
            
                <div className="imagen">
                    <img src="/images/gallery2.png" alt="imagen galeria"/>
                </div>
            
                <div className="imagen">
                    <img src="/images/gallery4.png" alt="imagen galeria"/>
                </div>
            
                <div className="imagen">
                    <img src="/images/gallery3.png" alt="imagen galeria"/>
                </div>
            
            </div>
          </div>

        <div className="gallery__footer">
          <div className="gallery__paragraph-second">

            <div lassName="gallery__prueba2">
              <img /* className="gallery__header-image" */ src="/images/flower-second-gallery.svg" alt="img" />
            </div>


              <div className="gallery__deprueba">
                <p className="gallery__paragraph-prueba">
                  TODOS LOS ESPACIOS se han diseñado para ser modernos, de lujo &
                  confortables, con todas las comodidades + amenidades para una estancia
                  de ensueño.
                </p>
                
                <a className="gallery__link">
                    VER SERVICIOS 
                    <img src="/images/arrow-form.svg" alt="Icon" />
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

