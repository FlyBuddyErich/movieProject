import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './About.css'
import icon1 from '../../assets/camera-icon.png'
import icon2 from '../../assets/film-icon.png'
import icon3 from '../../assets/cinema-icon.png'
import studioImage from '../../assets/movie-studio.jpg'
import studioImage2 from '../../assets/movie-studio2.jpg'
import studioImage3 from '../../assets/movie-studio3.jpg'


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const About = () => {

    useGSAP(() => {
        gsap.to(".about-upper-title", {
        duration: 1,
        opacity: 1,
        y: -20,
        scrollTrigger: { trigger: ".about-element"},
      })
      gsap.to(".about-element", {
        delay: 1.5,
        duration: 1,
        opacity: 1,
        x: -15,
        scrollTrigger: { trigger: ".about-element"},
      })
    });

    return (
        <div className='about-main'>
            <h2 className='about-upper-title'>About ReelMagic Studio</h2>
            <div className="about-container">
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} className='carousel'>
                    <div>
                        <img src={studioImage} alt="" className='studio-image'/>
                    </div>
                    <div>
                        <img src={studioImage2} alt="" className='studio-image'/>
                    </div>
                    <div>
                        <img src={studioImage3} alt="" className='studio-image'/>
                    </div>
                </Carousel>
                <div className="about-row">
                    <div className="about-element">
                        <div className="upper-element-text">
                            <h3>Classic Cinematic Magic</h3> <img src={icon1} alt="icon" />
                        </div>
                        <p>Step into Tinseltown’s golden era with our timeless movie cameras.</p>
                    </div>
                    <div className="about-element">
                        <div className="upper-element-text">
                            <h3>Endless Inspiration</h3> <img src={icon2} alt="icon" />
                        </div>
                        <p>Find fresh creativity in the charm of historical film techniques.</p>
                    </div>
                    <div className="about-element">
                        <div className="upper-element-text">
                            <h3>Impeccable Quality</h3> <img src={icon3} alt="icon" />
                        </div>
                        <p>Experience the undisputed quality of our meticulously restored vintage equipment.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About