import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=740&t=st=1683696216~exp=1683696816~hmac=523877863e15d29629ca98991cd2160057fc34f04cab6ee61fc3208ba601c19f" alt="Travel Agency Logo"/>
          </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>123 Travel Street</p>
            <p>Winnipeg, Canada</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Email: tropical_waves@travel.com</p>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="/#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="/#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="/#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="/#"><i className="fab fa-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
