import React from 'react'

export const Location = () => {
  return (
    <section className="location">
        <div className="location__paragraph-container">
            <p className="location__paragraph">
                Ubicados en los vecindarios más populares de CDMX La Condesa & Col. del Valle, zonas repletas de COLORES + CULTURA & llenas de entretenimiento. MY SUITES BY LA CONDESA son unas sofisticadas residencias AMUEBLADAS con estilo MODERNO que combinan con lo clásico de la ciudad donde sus detalles artísticos le dan un toque cálido y un distintivo  ÚNICO.
            </p>
        </div>
        <div className="location__images-container">
            <div className="location__img">
                <img src="/images/image-location-1.jpg" alt="img" />
                    <p><span>La Condesa,</span> su estilo art déco le da un ambiente europeo.</p>
            </div>
            <div className="location__img">
                    <img src="/images/image-location-2.jpg" alt="img" />
                    <p><span>Col. del Valle,</span> barrio céntrico, tranquilo y muy bien conectado.</p> 
            </div>
        </div>
        {/* <div className="location__welcome">
            <p>WELCOME<span> BIENVENIDO</span></p>
        </div> */}
    </section>

  )
}
