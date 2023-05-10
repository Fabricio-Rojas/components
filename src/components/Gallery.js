import React from 'react'
import Footer from './Footer'

function Gallery(props) {
  return (
    <>
    <main>
      <div className='images-grid container'>
        {props.urls.map((url, i) => (
          <div className='resort-image'key={i}>
            <img alt='' src={url}></img>
            <p>Book now</p>
            <p>Just ${(Math.floor(Math.random() * 1000)) + 150}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Gallery
