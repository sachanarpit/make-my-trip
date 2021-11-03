
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";
import {Smallslide} from './Smallslide'
export const MultipleSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    transitionDuration: 400,
    infinite: true,
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          <div><Smallslide/></div>
          <div><Smallslide/></div>
          <div><Smallslide/></div>
          <div><Smallslide/></div>
          <div><Smallslide/></div>
          <div><Smallslide/></div>
          <div><Smallslide/></div>
        </Slide>
      </div>
    </div>
  );
};

