import { FC } from "react";
import Slide from "../../slides/slide";
import SlideTitle from "../slide_title/slide_title";
import './works_slide_styles.scss';
import WorkCard from "./work_card";

const WorksSlide: FC = (props) => {
  function render(): JSX.Element {
    return (
      <Slide
      order={3} 
        builder={(order, ageFactor, alive) => {
          return (
            <div className='works_slide'>
             <SlideTitle title="WORKS" overlay="MY PORTFOLIO" />
              
              <div className="works">
                <WorkCard title="eCommerce Website" image="/works/ecommerce_website.png" />

                <WorkCard title="Cryptocurrency Price Tracker" image="/works/cryptocurrency_price_tracker.png" />

                <WorkCard title="eCommerce Website Backend" image="/works/ecommerce_website_backend.png" />
              </div>
            </div>
          );
        }}
      />
    );
  }

  return render();
}


export default WorksSlide;