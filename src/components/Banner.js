import React from 'react'
import Header from './Header'
import Button from './Button';

function Banner() {
  return (
    <>
        <Header />
        <section>
            <div>
                <h2>Travel to place of your Dreams NOW</h2>
                <p>Book flights and travel to the most exotic places in the world for a great price, alogn with getting great reservations at top quality hotels and resorts</p>
                <Button />
            </div>
        </section>
    </>
  )
}

export default Banner;
