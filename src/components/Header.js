import React from 'react'

function Header() {
  return (
    <header>
        <div className='container'>
            <h2>
                <i className="fa-solid fa-umbrella-beach"></i>
                Tropical Waves Travel
            </h2>
            <nav>
                <ul>
                    <li><button>Book Now</button></li>
                    <li><button>Contact Us</button></li>
                    <li><button>See Listings</button></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
