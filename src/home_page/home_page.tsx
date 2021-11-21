import React from 'react';
import SlidesViewport from '../slides/slides_viewport';
import Slide0 from './slide_0/slide_0';
import './home_page_styles.scss';
import Slide1 from './slide_1/slide_1';
import Slide2 from './slide_2/slide_2';
import Slide3 from './slide_3/slide_3';
import Slide4 from './slide_4/slide_4';

const HomePage: React.FC = (props) => {
  function render(): JSX.Element {
    return (
      <div className="home_page">
        <SlidesViewport sensitivity={3000}>
          <Slide0 />

          <Slide1 />

          {/* <Slide2 /> */}

          <Slide3 />
          
          <Slide4 />
        </SlidesViewport>
      </div>
    );
  }

  return render();
}


export default HomePage;