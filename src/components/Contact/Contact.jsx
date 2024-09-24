import React, { useState } from 'react'
import './Contact.css'
import github from '../../assets/github.png';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messageVisible, setMessageVisible] = useState(false);

    const handleClick = () => {
        if (email && name && message) {
            setMessageVisible(true);
            setTimeout(() => setMessageVisible(false), 5000); // Hide the message after 3 seconds
        }
    };

    return (
        <div className='contact-main'>
            <div className="contact-padding-box">
                <h2>Contact Us!</h2>
                <p>Your ideas can come true with us. Submit your ideas, portfolio, short films. Perhaps you will become an important part of cinema!</p>
                <div className="contact-main-box">
                    <div className="input-box">
                        <label>Your Email*</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Your Name*</label>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label>Write a message!*</label>
                        <textarea
                            rows="5"
                            cols="30"
                            placeholder='Enter your message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button className='send-button' onClick={handleClick}>Send message</button>
                        <p>Fields with * must be filled in</p>
                    </div>
                    <div className="contact-wrapper">
                        <div className="typing-text">
                            Get in touch with us.
                        </div>
                    </div>
                </div>
                <p className='credits'>To CEO</p>
                <p className='credits'>- Maxim Kokorev</p>
                <div className="footer-section">
                    <p>© 2024 Reel Magic Studios. All Rights Reserved.</p>
                   <a href="https://github.com/FlyBuddyErich" target="_blank"><img src={github} alt="" /></a>
                </div>
            </div>
            {messageVisible && <div className='message-box'>Message is sent. Thank You!</div>}
        </div>
    )
}

export default Contact