/* eslint-disable import/no-extraneous-dependencies */
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const CompaniesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  }

  return (
    <div className="companies-slider-container">
      <div className="companies-slider-sub-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://www.webingo.in/images/aditiya.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/drdo-3.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/wb-logo.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/JHAHA.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/flipkart.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/sib-l.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/tig.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/asme.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/AIESEC.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/mahanager-removebg-preview.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/nasscom-logo.jpg"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/surya.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>

          <div>
            <img
              src="https://www.webingo.in/images/Asansol_Engineering_College_Logo.jpg"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
          <div>
            <img
              src="https://www.webingo.in/images/Prestige.png"
              alt="company logo"
              className="company-slider-image"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default CompaniesSlider
