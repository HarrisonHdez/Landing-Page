import { useState } from 'react';

export const Form = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\nAcepta términos: ${aceptaTerminos}`);
    }



    return (
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form__title">INFORMACIÓN<br/> RESERVAS</h2>
        <div className="form__container">
            <div className="form__group">
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value) }
                required
                className="form__input"
                placeholder=' '
              />
              <label htmlFor="nombre" className="form__label">Nombre Completo</label>
            </div>
            <div className="form__group">
              <input
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                className="form__input"
                placeholder=' '
                />
                <label htmlFor="telefono" className="form__label">Teléfono</label>
            </div>
            <div className="form__group">
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value) }
                required
                className="form__input"
                placeholder=' '
              />
               <label htmlFor="correo" className="form__label">Correo electrónico</label>
            </div>
            <div className="form__group">
              <input
                type="checkbox"
                id="acepta-terminos"
                checked={aceptaTerminos}
                onChange={(e) => setAceptaTerminos(e.target.checked)}
                required
              />
              <label htmlFor="acepta-terminos" >
                Acepto las condiciones de tratamiento de información personal
              </label>
            </div>
        <button type="submit" className="form__button">POR FAVOR, LLAMARME</button>
        </div>
      </form>
    );
}
