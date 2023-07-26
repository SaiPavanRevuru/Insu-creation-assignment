// eslint-disable-next-line import/no-extraneous-dependencies
import {BsTelephoneFill} from 'react-icons/bs'

import './index.css'

const NavbarDetail = () => (
  <div className="navbar-container">
    <div className="navbar-detail-container">
      <div className="navbar-detail-sub-container">
        <img
          src="https://www.webingo.in/images/logo-client/A2-1.png"
          alt="logo img"
          className="logo-img"
        />
      </div>
      <div className="navbar-detail-sub-container">
        <ul className="navbar-list-container">
          <li className="navbar-list-item">IT SOLUTIONS+</li>
          <li className="navbar-list-item">STARTUP BOX+</li>
          <li className="navbar-list-item">COMPANY+</li>
          <li className="navbar-list-item">PURCHASE+</li>
          <li className="navbar-list-item">PORTFOLIO</li>
          <li className="navbar-list-item">CAREER</li>
          <li className="navbar-list-item">REACH US+</li>
        </ul>
        <div className="navbar-icon-container">
          <BsTelephoneFill className="navbar-tele-icon" />
        </div>
      </div>
    </div>
  </div>
)

export default NavbarDetail
