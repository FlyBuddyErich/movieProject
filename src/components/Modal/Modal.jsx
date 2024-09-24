import React, { useEffect, useRef } from 'react';
import './Modal.css';
import video2 from '../../assets/video2.mp4'

const Modal = ({ show, onClose, videoSrc }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (show) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show, onClose]);

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <video controls autoPlay>
                    <source src={video2} type="video/mp4" />
                    Ваш браузер не поддерживает видео тег.
                </video>
                <div className="text-section">
                    <p>© 2024 REELMAGIC STUDIO. Все права защищены.</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;