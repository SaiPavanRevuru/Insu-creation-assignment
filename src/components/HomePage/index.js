import NavbarRating from '../NavbarRating'
import NavbarDetail from '../NavbarDetail'
// eslint-disable-next-line import/no-named-as-default-member
import CoursesSection from '../CoursesSection'
import CompaniesSlider from '../CompaniesSlider'
import AboutSection from '../AboutSection'
import CoursesDetailed from '../CoursesDetailed'

import LanguagesSection from '../LanguagesSection'
import WhyChooseSection from '../WhyChooseSection'
import ExcellenceSection from '../ExcellenceSection'

import SocialMediaSection from '../SocialMediaSection'

import './index.css'

const HomePage = () => (
  <div>
    <NavbarRating />
    <NavbarDetail />
    <CoursesSection />
    <CompaniesSlider />
    <AboutSection />
    <CoursesDetailed />

    <LanguagesSection />
    <WhyChooseSection />
    <ExcellenceSection />

    <SocialMediaSection />
  </div>
)

export default HomePage
