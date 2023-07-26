// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick-theme.css'

// eslint-disable-next-line import/no-extraneous-dependencies
import {LiaGreaterThanSolid} from 'react-icons/lia'

import CourseItem from '../CourseItem'

import './index.css'

const coursesList = [
  {
    id: 1,
    courseName: 'App Development',
    courseUrl: 'https://www.webingo.in/images/thumb/app.png',
    backgroundImage: 'linear-gradient(to bottom,#ff92f6 0,#b300a5 100%)',
  },
  {
    id: 2,
    courseName: 'Software Development',
    courseUrl: 'https://www.webingo.in/images/thumb/software.png',
    backgroundImage: 'linear-gradient(to bottom,#3e35b7 0,#4c4aff 100%)',
  },
  {
    id: 3,
    courseName: 'Digital Marketing',
    courseUrl: 'https://www.webingo.in/images/thumb/dm.png',
    backgroundImage: 'linear-gradient(to bottom,#ffa76a 0,#ff8e38 100%)',
  },
  {
    id: 4,
    courseName: 'Graphic Designing',
    courseUrl: 'https://www.webingo.in/images/thumb/web.png',
    backgroundImage: 'linear-gradient(to bottom,#5782ea 0,#2251af 100%)',
  },
  {
    id: 5,
    courseName: 'SEO Services',
    courseUrl: 'https://www.webingo.in/images/thumb/seo.png',
    backgroundImage: 'linear-gradient(to bottom,#95e5ff 0,#009688 100%)',
  },
  {
    id: 6,
    courseName: 'Website Development',
    courseUrl: 'https://www.webingo.in/images/thumb/website.png',
    backgroundImage: 'linear-gradient(to bottom,#5782ea 0,#2251af 100%)',
  },
]

const CoursesSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  return (
    <div className="courses-section-container">
      <div className="course-section-sub-cont-1">
        <div className="course-section-headings-cont">
          <h1 className="course-section-headings">WEBSITE</h1>
          <h1 className="course-section-headings">GRAPHICS</h1>
          <h1 className="course-section-headings">MARKETING</h1>
          <h1 className="course-section-headings">APPLICATION</h1>
        </div>
        <p className="course-section-para">
          Digital IT Solutions for transforming and innovative Businesses
        </p>
        <button type="button" className="course-section-button-cont">
          View Portfolio
          <LiaGreaterThanSolid />
        </button>
      </div>
      <div className="course-section-slider">
        <Slider {...settings}>
          {coursesList.map(eachCourse => (
            <CourseItem courseDetails={eachCourse} key={eachCourse.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CoursesSection
