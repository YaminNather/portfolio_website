import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import './navigator_styles.scss';
import { faBriefcase, faEnvelopeOpen, faHome, faTasks, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import SlidesController from "../../slides/slides_controller";
import { useChangeNotifier } from "change-notifier";
import classNames from "classnames";

export interface NavigatorProps {
  slidesController: SlidesController;
}

const Navigator: FC<NavigatorProps> = (props) => {
  useChangeNotifier(props.slidesController);

  function render(): JSX.Element {
    return (
      <div className='navigator'>
        {buttonIcons.map(
          (value, index) => {            
            const className: string = classNames(`icon_button`, (index === props.slidesController.getCurrentPage()) ? "active" : "");

            return (
              <button className={className} onClick={(e) => props.slidesController.toPage(index)}>
                <FontAwesomeIcon icon={value} />
              </button>
            );
          }
        )}
      </div>
    );
  }


  // return <></>;
  return render();
}

const buttonIcons: IconDefinition[] = [
  faHome,
  faUser,
  faTasks,
  faBriefcase,
  faEnvelopeOpen
];


export default Navigator;