import React from 'react'

function Header() {
  return (
    <header>
        <div className='container'>
            <aside>
                <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=740&t=st=1683696216~exp=1683696816~hmac=523877863e15d29629ca98991cd2160057fc34f04cab6ee61fc3208ba601c19f" alt="Travel Agency Logo"/>
                <h2>Tropical Waves Travel</h2>
            </aside>
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
