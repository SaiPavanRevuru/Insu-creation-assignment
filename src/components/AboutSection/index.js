import {TiTickOutline} from 'react-icons/ti'
import {LiaGreaterThanSolid} from 'react-icons/lia'

import './index.css'

const AboutSection = () => (
  <div className="about-section-container">
    <div className="about-section-first-container">
      <div className="about-section-left-sub-container">
        <h1 className="about-section-sub-cont-heading">
          Why to take your business Online ?
        </h1>
        <p className="about-section-sub-cont-description">
          The Internet may be a deep-sea expecting to be explored. You can get
          all you want if you dive in. If you are taking your business online,
          it has certain benefits. It improves your brand image, your business
          is often available to consumers 24/7, the start-up cost is extremely
          less, it reduces operation cost, you wll work from anywhere around the
          world, but most significantly, the web was made for Business.
        </p>
        <h3 className="about-section-sub-cont-sub-heading">
          In todays market, is it required-
        </h3>
        <ul className="about-section-list-cont">
          <li className="about-section-list-item">
            <TiTickOutline className="about-section-tick-icon" />
            <p className="about-section-list-item-text">
              To beat the Competition.
            </p>
          </li>
          <li className="about-section-list-item">
            <TiTickOutline className="about-section-tick-icon" />
            <p className="about-section-list-item-text">
              To Gain Leverage in the Market.
            </p>
          </li>
          <li className="about-section-list-item">
            <TiTickOutline className="about-section-tick-icon" />
            <p className="about-section-list-item-text">
              To get exposure and expansion.
            </p>
          </li>
        </ul>
        <button type="button" className="about-section-button-1">
          Request A Quote
          <LiaGreaterThanSolid />
        </button>
      </div>
      <div className="about-section-image-container">
        <img
          src="https://www.webingo.in/images/laptop1.png"
          className="about-section-image"
          alt="laptop"
        />
      </div>
    </div>
    <div className="about-section-second-container">
      <div className="about-section-second-sub-container">
        <p className="about-section-second-title">
          Need{' '}
          <span className="about-section-third-title-transform">
            solution to all your business complications?
          </span>
        </p>
        <button type="button" className="about-section-button-2">
          Get in Touch
        </button>
      </div>
    </div>
    <div className="about-section-third-container">
      <p className="about-section-third-cont-title">
        WE ARE INNOVATIVE SOLUTION PROVIDERS
      </p>
      <h3 className="about-section-third-container-heading">
        Top rated IT- Solutions Company
      </h3>
      <p className="about-section-third-container-description">
        WEBINGO® is a renowned end-to-end IT company in India that provides
        ultimate IT solutions and has provided consultancy to numerous start-ups
        across India, making a name as one of the best IT consulting companies
        in Kolkata. WEBINGO provides Innovative IT Solutions at minimal
        Investments at the best price and excellent Customer Service.
      </p>
    </div>
  </div>
)

export default AboutSection
