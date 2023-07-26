import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsWhatsapp,
  BsFillEnvelopeFill,
} from 'react-icons/bs'

import './index.css'

const qualitiesImages = [
  {id: 1, imgURl: 'https://www.webingo.in/images/5yrs-remove.png'},
  {id: 2, imgURl: 'https://www.webingo.in/images/google_star.png'},
  {id: 3, imgURl: 'https://www.webingo.in/images/facebook_star.png'},
  {id: 4, imgURl: 'https://www.webingo.in/images/isooo.png'},
  {id: 5, imgURl: 'https://www.webingo.in/images/DPIIT.png'},
  {id: 6, imgURl: 'https://www.webingo.in/images/jd-removebg-preview.png'},
]

const SocialMediaSection = () => (
  <div className="social-media-container">
    <div className="social-media-container-1">
      <div className="social-media-container-1-sub-cont-1">
        <h1 className="social-media-container-1-sub-cont-heading">
          Indias Most Reliable IT Solution Company
        </h1>
        <p className="social-media-container-1-sub-cont-para">
          Acclaimed, Certified and Reviewed by some biggest names and
          organisations.
        </p>
      </div>
      <div className="social-media-container-1-sub-cont-2">
        {qualitiesImages.map(eachImg => (
          <img
            src={eachImg.imgURl}
            key={eachImg.id}
            alt="quality"
            className="social-media-container-1-sub-cont-1-img"
          />
        ))}
      </div>
    </div>
    <div className="social-media-container-2">
      <div className="social-media-container-2-sub-cont-1">
        <BsFacebook className="social-media-container-2-sub-cont-icon" />
        <BsTwitter className="social-media-container-2-sub-cont-icon" />
        <BsInstagram className="social-media-container-2-sub-cont-icon" />
        <BsLinkedin className="social-media-container-2-sub-cont-icon" />
        <BsYoutube className="social-media-container-2-sub-cont-icon" />
        <BsWhatsapp className="social-media-container-2-sub-cont-icon" />
        <BsFillEnvelopeFill className="social-media-container-2-sub-cont-icon" />
      </div>
      <h1 className="social-media-container-2-sub-cont-heading">
        Copyright © 2017-23 Webingo. All rights reserved.
      </h1>
      <div className="social-media-container-2-sub-cont-2">
        <img
          src="https://images.dmca.com/Badges/dmca-badge-w200-5x1-03.png?ID=61ad5d2a-94aa-438c-a6bc-3dcd044a7cda"
          alt="potected"
          className="social-media-container-2-sub-cont-img"
        />
        <img
          src="https://www.positivessl.com/images/seals/positivessl_trust_seal_sm_124x32.png"
          alt="protected"
          className="social-media-container-2-sub-cont-img"
        />
      </div>
    </div>
  </div>
)

export default SocialMediaSection
