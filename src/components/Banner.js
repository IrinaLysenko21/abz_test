import React from 'react';
import Media from 'react-media';
import Button from './Button';

const Banner = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 1023px)',
        large: '(min-width: 1024px)',
      }}
    >
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
