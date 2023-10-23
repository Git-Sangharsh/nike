import React from 'react'
import './Footer.css'
// import twitterlogo from '../assets/twitterlogo.png'
// import youtubelogo from '../assets/youtubelogo.png'
// import instalogo from '../assets/instalogo.png'
// import facebooklogo from '../assets/facebookLogo.png'

const Footer = (props) => {

  const aboutUsRef = props.aboutUsRef

  return (
    <div ref={aboutUsRef} className="Footer">
      <div className="footer-wrapper">
        <div className="details">
          <div className="find-store">
            <h1>FIND STORE</h1>
            <h1>BECOME A MEMBER</h1>
            <h1>Send Us Feedback</h1>
          </div>

          <div className="get-help">
            <h1>GET HELP</h1>
            <h4>Order Status</h4>
            <h4>Delivery</h4>
            <h4>Returns</h4>
            <h4>Payment Options</h4>
            <h4>Contact Us On Nike.com inquiries</h4>
            <h4>Contact Us On All Other inquiries</h4>
          </div>

          <div className="about-nike">
            <h1>ABOUT NIKE</h1>
            <h3>News</h3>
            <h3>Careers</h3>
            <h3>Investors</h3>
            <h3>Sustainability</h3>
          </div>
        </div>

        {/* <div className="connection">
          <img src={twitterlogo} alt="" />
          <img src={facebooklogo} alt="" />
          <img src={youtubelogo} alt="" />
          <img src={instalogo} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Footer