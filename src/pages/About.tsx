import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="section">
      <div className="section__column ">
        <h1 className="section__title">İsmail Yarar</h1>
        <p className="section__about">
          Result oriented young talent with 1 year of hands-on experience on frontend development
          and passion for responsive website design. Skilled in developing single web applications
          with various frontend technologies. Analytical thinker, tech savvy, adaptive learner, and
          open-minded colleague.
        </p>
        <button className="button--back" type="submit" onClick={() => navigate('/')}>
          Back
        </button>
      </div>
    </div>
  );
};

export default About;
