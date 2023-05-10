import React from 'react'
import Header from './Header'
import Button from './Button';

function Banner(props) {
  return (
    <>
        <Header />
        <section>
            <div className='text-area'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className='buttons'>
                  <Button type='primary' text='Book now'/>
                  <Button type='secondary' text='See Listing'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner;
