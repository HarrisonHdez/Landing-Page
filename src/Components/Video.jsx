import React from 'react'

export const Video = () => {
  return (
    <section className="about">
      <div className="video-container">
        <video  autoPlay muted loop loading="lazy">
          <source src="/videos/video1.mp4" type="video/mp4" />
          <source src="/videos/video1.webm" type="video/webm" />
        </video>
      </div>
    </section>
  )
}


{/* <section className="about">
      <div className="video-container">
        <video autoPlay>
          <source src="/videos/video1.mp4" type="video/mp4" />
          <source src="/videos/video1.webm" type="video/webm" />
        </video>
      </div>
    </section> */}