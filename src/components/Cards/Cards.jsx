import React, { useState } from 'react';
import './Cards.css';
import Modal from '../Modal/Modal';
import poster from '../../assets/poster.jpg';
import poster1 from '../../assets/poster1.png';
import poster2 from '../../assets/poster2.png';
import poster3 from '../../assets/poster3.jpg';
import poster4 from '../../assets/poster4.png';
import poster5 from '../../assets/poster5.jpg';

const videoSrc = '../../assets/video2.mp4';

const Cards = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');

    const handleCardClick = () => {
        setCurrentVideo(videoSrc);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentVideo('');
    };

    return (
        <div className='cards-main'>
            <h1>Our Movies</h1>
            <p>This is a collection of films that were made by ReelMagic or with the support of ReelMagic. Click on the card to see the trailer!</p>
            <div className="cards-container">
                <div className="card" onClick={handleCardClick}>
                    <img src={poster} alt="" className='card-preson-picture' />
                    <div className="card-text">
                        <p className='card-text-name'>RHYNESTONE EYES</p>
                        <p className='card-text-itself'>A gripping thriller that keeps you on the edge of your seat until the very end.</p>
                        <hr />
                        <p className='card-text-author'>Emma, Film Critic</p>
                    </div>
                </div>
                <div className="card" onClick={handleCardClick}>
                    <img src={poster1} alt="" className='card-preson-picture' />
                    <div className="card-text">
                    <p className='card-text-name'>JELLYFISH</p>
                        <p className='card-text-itself'>A poetic drama about life and love in a small coastal town.</p>
                        <hr />
                        <p className='card-text-author'>Michael, Screenwriter</p>
                    </div>
                </div>
                <div className="card" onClick={handleCardClick}>
                    <img src={poster2} alt="" className='card-preson-picture' />
                    <div className="card-text">
                    <p className='card-text-name'>CARNIVAL</p>
                        <p className='card-text-itself'>A vibrant and colorful comedy filled with music, dance, and laughter.</p>
                        <hr />
                        <p className='card-text-author'>Sophia, Entertainment Reporter</p>
                    </div>
                </div>
                <div className="card" onClick={handleCardClick}>
                    <img src={poster3} alt="" className='card-preson-picture' />
                    <div className="card-text">
                    <p className='card-text-name'>GIRL. THE PAINTING</p>
                        <p className='card-text-itself'>An intriguing mystery about a enigmatic painting and its influence on people's lives.</p>
                        <hr />
                        <p className='card-text-author'>David, Art Historian</p>
                    </div>
                </div>
                <div className="card" onClick={handleCardClick}>
                    <img src={poster4} alt="" className='card-preson-picture' />
                    <div className="card-text">
                    <p className='card-text-name'>THE FALL</p>
                        <p className='card-text-itself'>An epic saga about the collapse of an empire and the birth of a new era.</p>
                        <hr />
                        <p className='card-text-author'>Alexandra, Historical Fiction Author</p>
                    </div>
                </div>
                <div className="card" onClick={handleCardClick}>
                    <img src={poster5} alt="" className='card-preson-picture' />
                    <div className="card-text">
                    <p className='card-text-name'>SECOND RENAISSANCE</p>
                        <p className='card-text-itself'>A futuristic sci-fi about humanity's rebirth after a global catastrophe.</p>
                        <hr />
                        <p className='card-text-author'>Robert, Science Fiction Novelist</p>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onClose={closeModal} videoSrc={currentVideo} />
        </div>
    );
};

export default Cards;