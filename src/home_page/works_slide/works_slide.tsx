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
                <WorkCard 
                  image="/works/ecommerce_website.png"
                  title="eCommerce Website" 
                  subtitle="NextJS HTML SCSS Typescript"
                  url="https://fashion-website-snowy.vercel.app"
                />

                <WorkCard 
                  image="/works/cryptocurrency_price_tracker.png" 
                  title="Cryptocurrency Price Tracker"
                  subtitle="NEXTJS HTML SCSS Typescript"
                  url="https://crypto-price-tracker-two.vercel.app"
                />

                <WorkCard 
                  image="/works/ecommerce_website_backend.png" 
                  title="eCommerce Website Backend"
                  subtitle="ExpressJS Typescript"
                  url="https://github.com/YaminNather/fashion_website_backend_express"
                />
                
                <WorkCard 
                  image="/works/portfolio.png" 
                  title="Portfolio" 
                  subtitle="React Typescript"
                  url="https://portfolio-website-mauve-omega.vercel.app"
                />
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