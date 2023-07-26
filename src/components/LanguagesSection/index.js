import './index.css'

const LanguagesList = [
  {id: 1, imgUrl: 'https://www.webingo.in/images/icons/stack-icon1.png'},
  {id: 2, imgUrl: 'https://www.webingo.in/images/icons/stack-icon2.png'},
  {id: 3, imgUrl: 'https://www.webingo.in/images/icons/stack-icon3.png'},
  {id: 4, imgUrl: 'https://www.webingo.in/images/icons/stack-icon4.png'},
  {id: 5, imgUrl: 'https://www.webingo.in/images/icons/stack-icon5.png'},
  {id: 6, imgUrl: 'https://www.webingo.in/images/icons/stack-icon6.png'},
  {id: 7, imgUrl: 'https://www.webingo.in/images/icons/stack-icon7.png'},
  {id: 8, imgUrl: 'https://www.webingo.in/images/icons/stack-icon8.png'},
]

const LanguagesSection = () => (
  <div className="languages-container">
    <div className="languages-sub-container">
      {LanguagesList.map(eachLanguage => (
        <button type="button" className="language-button-item">
          <img
            src={eachLanguage.imgUrl}
            key={eachLanguage.id}
            alt="lang img"
            className="language-item"
          />
        </button>
      ))}
    </div>
  </div>
)

export default LanguagesSection
