import {
  BackgroundGradientBottomLeft,
  BackgroundGradientBottomRight,
  BackgroundGradientContainer,
  BackgroundGradientTopCenter,
} from './BackgroundGradient.style';

import bg from '../../assets/bg.png'

export const BackgroundGradient = () => {
  return (
    <BackgroundGradientContainer>
              <img
          style={{ opacity: 0.3 }}
          className="Preloader__background"
          src={bg}
          alt=""
        />
      {/* <BackgroundGradientBottomLeft />
      <BackgroundGradientBottomRight />
      <BackgroundGradientTopCenter /> */}
    </BackgroundGradientContainer>
  );
};
