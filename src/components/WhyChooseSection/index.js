import {LiaGreaterThanSolid} from 'react-icons/lia'

import './index.css'

const qualityDetails1 = [
  {
    id: 1,
    name: 'Trustworthy Service',
    description:
      'We work to serve you so that you can make your business stronger.',
    imgUrl: 'https://www.webingo.in/images/png/trustworthy.png',
  },
  {
    id: 2,
    name: 'Dedicated Manager and Team',
    description:
      'We assign a manager and a team to your project for better and perfect results.',
    imgUrl: 'https://www.webingo.in/images/png/dedicate-manager.png',
  },
  {
    id: 3,
    name: 'Technical Proficiency',
    description:
      'Our Team is highly proficient in the technology they use. They believe in understanding technology to a deeper level.',
    imgUrl: 'https://www.webingo.in/images/png/technical.png',
  },
]

const qualityDetails2 = [
  {
    id: 4,
    name: 'Customer Friendly',
    description:
      'We listen to your problems with the utmost professionalism and friendly nature.',
    imgUrl: 'https://www.webingo.in/images/png/customer-service.png',
  },
  {
    id: 5,
    name: 'Timely reports',
    description:
      'We give you knowledge about your project progress timely and communicate regarding the same.',
    imgUrl: 'https://www.webingo.in/images/png/timely.png',
  },
  {
    id: 6,
    name: 'Punctuality',
    description:
      'The best delivered in time is our prime focus to increase satisfaction and trust. For us, time is the key!',
    imgUrl: 'https://www.webingo.in/images/png/punctuality.png',
  },
]

const WhyChooseSection = () => (
  <div className="why-choose-section-main-container">
    <div className="why-choose-section-top-container">
      <h4 className="why-choose-section-top-title">WE DELIVER OUR BEST</h4>
      <h1 className="why-choose-section-top-heading">Why Choose WEBINGO?</h1>
      <p className="why-choose-section-top-para">
        We are the best at what we do.
      </p>
    </div>
    <div className="why-choose-section-middle-container">
      <div className="why-choose-section-middle-sub-cont">
        {qualityDetails1.map(eachQuality => (
          <div
            className="why-choose-section-middle-sub-item"
            key={eachQuality.id}
          >
            <img
              src={eachQuality.imgUrl}
              alt={eachQuality.name}
              className="why-choose-section-middle-sub-img"
            />
            <div className="why-choose-section-middle-sub-item-2">
              <h1 className="why-choose-section-middle-sub-item-2-heading">
                {eachQuality.name}
              </h1>
              <p className="why-choose-section-middle-sub-item-2-para">
                {eachQuality.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="why-choose-section-middle-sub-cont">
        {qualityDetails2.map(eachQuality => (
          <div
            className="why-choose-section-middle-sub-item"
            key={eachQuality.id}
          >
            <img
              src={eachQuality.imgUrl}
              alt={eachQuality.name}
              className="why-choose-section-middle-sub-img"
            />
            <div className="why-choose-section-middle-sub-item-2">
              <h1 className="why-choose-section-middle-sub-item-2-heading">
                {eachQuality.name}
              </h1>
              <p className="why-choose-section-middle-sub-item-2-para">
                {eachQuality.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="why-choose-section-bottom-container">
      <h1 className="why-choose-section-bottom-heading">
        Want to start a new project?
      </h1>
      <button type="button" className="why-choose-section-bottom-button">
        Enquire Now
        <LiaGreaterThanSolid />
      </button>
    </div>
  </div>
)

export default WhyChooseSection
