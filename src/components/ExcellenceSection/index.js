import {LiaGreaterThanSolid} from 'react-icons/lia'
import './index.css'

const excellenceDetails = [
  {
    id: 1,
    name: 'DESIGN',
    description: 'Graphic Designing and Branding',
    imgUrl: 'https://www.webingo.in/images/home/design.png',
    backgroundColor: '#4169E1',
  },
  {
    id: 2,
    name: 'APPLICATION',
    description: 'Application Based Software',
    imgUrl: 'https://www.webingo.in/images/home/app.png',
    backgroundColor: '#e83e8c',
  },
  {
    id: 3,
    name: 'SEO',
    description: 'Search Engine Optimization',
    imgUrl: 'https://www.webingo.in/images/thumb/seo.png',
    backgroundColor: '#fd7e14',
  },
  {
    id: 4,
    name: 'WEB DESIGN',
    description: 'Web Design Deployment',
    imgUrl: 'https://www.webingo.in/images/home/website.png',
    backgroundColor: '#6f42c1',
  },
]

const ExcellenceSection = () => (
  <div className="excellence-section-container">
    <div className="excellence-section-top-container">
      <h3 className="excellence-section-top-container-title">OUR EXCELLENCE</h3>
      <h1 className="excellence-section-top-container-heading">
        Our Key Expertise Areas
      </h1>
    </div>
    <div className="excellence-section-middle-container">
      {excellenceDetails.map(eachExcellence => (
        <div
          className="excellence-section-middle-container-card-item"
          style={{background: eachExcellence.backgroundColor}}
        >
          <div className="excellence-section-middle-container-card-sub">
            <h1 className="excellence-section-middle-container-card-sub-heading">
              {eachExcellence.name}
            </h1>
            <p className="excellence-section-middle-container-card-sub-para">
              {eachExcellence.description}
            </p>
          </div>
          <img
            src={eachExcellence.imgUrl}
            alt={eachExcellence.name}
            className="excellence-section-bottom-container-image"
          />
        </div>
      ))}
    </div>
    <div className="excellence-section-bottom-container-card">
      <p className="excellence-section-bottom-container-card-para">
        get your free Customized Quotation
      </p>
      <button
        type="button"
        className="excellence-section-bottom-container-button"
      >
        Today <LiaGreaterThanSolid />
      </button>
    </div>
  </div>
)

export default ExcellenceSection
