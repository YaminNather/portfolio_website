import React, { useRef } from 'react';
import SlidesController from '../slides/slides_controller';
import SlidesViewport from '../slides/slides_viewport';
import AboutMeSlide from './about_me_slide/about_me_slide';
import ContactMeSlide from './contact_me_slide/contact_me_slide';
import HeroSlide from './hero_slide/hero_slide';
import './home_page_styles.scss';
import Navigator from './navigator/navigator';
import SkillsSlide from './skills_slide/skills_slide';
import WorksSlide from './works_slide/works_slide';

const HomePage: React.FC = (props) => {
  const controller = useRef<SlidesController>(new SlidesController()).current;

  function render(): JSX.Element {
    return (
      <div className="home_page">
        <SlidesViewport controller={controller} sensitivity={3000}>
          <HeroSlide slidesController={controller} />

          <AboutMeSlide />
          
          <SkillsSlide />

          <WorksSlide />

          <ContactMeSlide />
        </SlidesViewport>

        <Navigator slidesController={controller} />
      </div>
    );
  }

  return render();
}


export default HomePage;