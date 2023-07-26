import './index.css'

const NavbarRating = () => (
  <div className="navbar-rating-container">
    <div className="navbar-rating-sub-container">
      <img
        src="https://www.webingo.in/images/google-logo.png"
        alt="google img"
        className="google-img"
      />
      <img
        src="https://www.webingo.in/images/footer-rating.png"
        alt="star rating"
        className="star-rating-img"
      />
      <p className="rating-para">Excellent 4.8 out of 5</p>
    </div>
    <div className="navbar-rating-sub-container">
      <p className="navbar-talk-text">Talk to our Expert</p>
      <p className="navbar-phone-number">(+91)8001-81-1234</p>
      <p className="navbar-talk-text">or</p>
      <div className="navbar-contact-container">
        <img
          src="https://www.webingo.in/images/image2/girl.png"
          alt="customer care"
          className="navbar-customer-care-img"
        />
        <p className="navbar-call-back">Request a Call Back</p>
      </div>
    </div>
  </div>
)

export default NavbarRating
