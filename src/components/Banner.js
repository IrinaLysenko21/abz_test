import React from 'react';
import Media from 'react-media';
import Button from './Button';
import config from '../config/config';

const Banner = () => {
  return (
    <Media queries={config.GLOBAL_MEDIA_QUERIES}>
      {matches => (
        <div className="banner">
          <div className="container">
            <h2 className="banner__title title">
              Test assignment
              <br /> for Frontend
              <br /> Developer position
            </h2>
            <p className="banner__description paragraph">
              {matches.small &&
                'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.'}
              {matches.medium &&
                'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens'}
              {matches.large &&
                'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens'}
            </p>
            <Button btnClass="banner__button" text="Sing up now" />
          </div>
        </div>
      )}
    </Media>
  );
};

export default Banner;
