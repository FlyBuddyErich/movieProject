import React from 'react'
import './VideoSection.css'
import video from '../../assets/video.mp4'

const VideoSection = () => {
  return (
    <div className='video-main'>
      <video src={video} autoPlay loop muted playsInline className="background">
      </video>
      <div className="video-overlay">
        <h1>REELMAGIC</h1>
        <p>We are searching writers! Contact us!</p>
        <a className='video-button' href='https://github.com/FlyBuddyErich' target="_blank">Contact.</a>
      </div>
    </div>
  )
}

export default VideoSection