
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

export const BigSlidesExample = () => {
  const properties = {
    duration: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    indicators: false,
    transitionDuration: 300,
    infinite: false,
  };

  return (
    <div style={{width: '90%', margin: 'auto'}}>
      <div>
        <Slide {...properties}>
      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//train05-116x116-06012021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//train05-116x116-06012021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//train05-116x116-06012021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//train05-116x116-06012021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//train05-116x116-06012021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//train05-116x116-06012021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>

      <div className="parentbigslide">
      <div className="bigslideDiv">
        <div>
          <img src="https://promos.makemytrip.com/notification/xhdpi//train05-116x116-06012021.jpg" alt=""/>
          <span>T&C'sApply</span>
        </div>
        <div>
          <h3>GENERAL </h3>
          <h2>#JoHogaWOWhoga: Book you flights at 30% off now.</h2>
          <div className="reddiv"></div>
          <p>Offer valid at HDFC credit card and EasyEMI.</p>
          <h4>Explore Now</h4>
        </div>
      </div>
      </div>
        </Slide>
      </div>
    </div>
  );
};

