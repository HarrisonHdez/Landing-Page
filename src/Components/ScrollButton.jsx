import React, { useState } from 'react'

export const ScrollButton = () => {


    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
        setVisible(true);
        } else if (scrolled <= 300) {
        setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='scroll-button'>
        {visible && (
            <div className='scroll-button__container'>
            <img
                src='/images/scroll-button.svg'
                alt='Botón de subir'
                className='scroll-button__icon'
                onClick={scrollToTop}
            />
            </div>
        )}
        </div>
    )
}
