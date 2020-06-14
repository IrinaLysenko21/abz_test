import React from 'react';
import Button from './Button';
import manLaptop from '../images/man-laptop-v1.svg';

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title section-title">Let's get acquainted</h2>

        <div className="about__content-wrapper">
          <img
            className="about__image"
            src={manLaptop}
            alt="Man with a laptop"
          />
          <div>
            <h3 className="about__title-2 section-title-2">
              I am cool frontend developer
            </h3>
            <p className="about__description section-paragraph">
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </p>
            <p className="about__description section-paragraph">
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page P​SD mockup​ into HTML5/CSS3.
            </p>
            <Button btnClass="about__button" text="Sign up now" flat />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
