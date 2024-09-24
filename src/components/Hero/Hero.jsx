import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'
import collage from '../../assets/collage.png'

const Hero = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Получение и форматирование текущей даты
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className='hero-main'>
            <div className="hero-logo">REELMAGIC</div>
            <div className="hero-menu">
                <p>Capture captivating nostalgia.</p>
                <p>Get Inspired</p>
                <p>{currentDate}</p>
            </div>
            <div className="hero-collage">
                <img src={collage} alt="collage" />
            </div>
        </div>
    )
}

export default Hero