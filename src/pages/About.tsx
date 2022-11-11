import React from 'react';
import IProps from './IProps';
import './style.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div>
        <h1 className="section__title">İsmail Yarar</h1>
        <p className="section__about">
          Result oriented young talent with 1 year of hands-on experience on frontend development
          and passion for responsive website design. Skilled in developing single web applications
          with various frontend technologies. Analytical thinker, tech savvy, adaptive learner, and
          open-minded colleague.
        </p>
        <button type="submit" onClick={() => navigate('/')}>
          Back
        </button>
      </div>
      <div>
        
      </div>
    </motion.div>
  );
};

export default About;
