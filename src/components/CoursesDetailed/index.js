import {useState} from 'react'
import './index.css'

const coursesDetails = [
  {
    id: 1,
    name: 'Web Development',
    languages: [
      {id: 1, lang: 'php'},
      {id: 2, lang: 'HTML5'},
      {id: 3, lang: 'REACT'},
      {id: 4, lang: 'WORD PRESS'},
    ],
    description:
      'Creating and Maintaining a website to provide the best looking and efficiently working websites for a seamless user experience.',
    imgUrl: 'https://www.webingo.in/images/icons/development.svg',
    backgroundColor: '#6c757d',
    borderColor: '#e83e8c',
  },
  {
    id: 2,
    name: 'App Development',
    languages: [
      {id: 5, lang: 'php'},
      {id: 6, lang: 'HTML5'},
      {id: 7, lang: 'REACT'},
      {id: 8, lang: 'WORD PRESS'},
    ],
    description:
      'Creation of Software Applications that run on a mobile device. They utilize a network connection to work with remote computing resources.',
    imgUrl: 'https://www.webingo.in/images/png/app.png',
    backgroundColor: '#f8f9fa',
    borderColor: '#00BFFF',
  },
  {
    id: 3,
    name: 'Graphic Designing',
    languages: [
      {id: 9, lang: 'php'},
      {id: 10, lang: 'HTML5'},
      {id: 11, lang: 'REACT'},
      {id: 12, lang: 'WORD PRESS'},
    ],
    description:
      'The creation of styles through the method of communication and problem-solving through the utilization of typography, photography, illustrations, and lots more.',
    imgUrl: 'https://www.webingo.in/images/png/graphic.png',
    backgroundColor: '#e83e8c',
    borderColor: '#6c757d',
  },
  {
    id: 4,
    name: 'Digital Marketing',
    languages: [
      {id: 13, lang: 'php'},
      {id: 14, lang: 'HTML5'},
      {id: 15, lang: 'REACT'},
      {id: 16, lang: 'WORD PRESS'},
    ],
    description:
      'Use of the Internet and Digital Technologies/ Media to promote/ sell people, products, businesses, etc.',
    imgUrl: 'https://www.webingo.in/images/icons/development.svg',
    backgroundColor: '#17a2b8',
    borderColor: '#E8F1FA',
  },
  {
    id: 5,
    name: 'Web Development',
    languages: [
      {id: 17, lang: 'php'},
      {id: 18, lang: 'HTML5'},
      {id: 19, lang: 'REACT'},
      {id: 20, lang: 'WORD PRESS'},
    ],
    description:
      'Use of the Internet and Digital Technologies/ Media to promote/ sell people, products, businesses, etc.',
    imgUrl: 'https://www.webingo.in/images/icons/development.svg',
    backgroundColor: '#E8F1FA',
    borderColor: '#00BFFF',
  },
]

const CoursesDetailed = () => {
  const [hoverStates, setHoverStates] = useState({})

  const handleMouseEnter = courseId => {
    setHoverStates(prevHoverStates => ({
      ...prevHoverStates,
      [courseId]: true,
    }))
  }

  const handleMouseLeave = courseId => {
    setHoverStates(prevHoverStates => ({
      ...prevHoverStates,
      [courseId]: false,
    }))
  }

  return (
    <div className="courses-detailed-main-cont">
      <div className="courses-detailed-sub-cont-spc">
        <h1 className="courses-detailed-sub-cont-spc-heading">
          Integrated Services
        </h1>
        <p className="courses-detailed-sub-cont-spc-description">
          We have worked over the years to Integrate all the services in one
          place so that you don’t have to go door-to-door for the best quality
          of service.
        </p>
      </div>
      {coursesDetails.map(eachCourse => (
        <div
          onMouseEnter={() => handleMouseEnter(eachCourse.id)}
          onMouseLeave={() => handleMouseLeave(eachCourse.id)}
          key={eachCourse.id}
          className="courses-detailed-sub-cont"
        >
          {hoverStates[eachCourse.id] ? (
            <div
              className="courses-detailed-sub-cont-card-hover"
              style={{
                background: eachCourse.backgroundColor,
                borderColor: eachCourse.borderColor,
              }}
            >
              <h1 className="courses-detailed-sub-cont-card-heading-hover">
                {eachCourse.name}
              </h1>
              <ul className="courses-detailed-sub-cont-card-list-cont-hover">
                {eachCourse.languages.map(eachLang => (
                  <li
                    className="courses-detailed-sub-cont-card-list-item-cont-hover"
                    key={eachLang.id}
                  >
                    {eachLang.lang}
                  </li>
                ))}
              </ul>
              <p className="courses-detailed-sub-cont-card-description-hover">
                {eachCourse.description}
              </p>
            </div>
          ) : (
            <div
              className="courses-detailed-sub-cont-card"
              style={{
                background: eachCourse.backgroundColor,
                borderColor: eachCourse.borderColor,
              }}
            >
              <img
                className="courses-detailed-sub-cont-card-img"
                src={eachCourse.imgUrl}
                alt={eachCourse.name}
              />
              <h1 className="courses-detailed-sub-cont-card-heading">
                {eachCourse.name}
              </h1>
              <ul className="courses-detailed-sub-cont-card-list-cont-hover">
                {eachCourse.languages.map(eachLang => (
                  <li
                    className="courses-detailed-sub-cont-card-list-item-cont-hover"
                    key={eachLang.id}
                  >
                    {eachLang.lang}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CoursesDetailed
