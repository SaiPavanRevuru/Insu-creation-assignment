import './index.css'

const CourseItem = props => {
  const {courseDetails} = props
  const {courseName, courseUrl, backgroundImage} = courseDetails

  return (
    <div
      className="course-item-container"
      style={{background: backgroundImage}}
    >
      <img className="course-item-img" src={courseUrl} alt={courseName} />
      <h1 className="course-item-heading">{courseName}</h1>
    </div>
  )
}

export default CourseItem
