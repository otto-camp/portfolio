import React from 'react';
import IProps from './IProps';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h1 className="section__title">İsmail Yarar</h1>
      <p>
        Result oriented young talent with 1 year of hands-on experience on frontend development and
        passion for responsive website design. Skilled in developing single web applications with
        various frontend technologies. Analytical thinker, tech savvy, adaptive learner, and
        open-minded colleague.
      </p>
    </motion.div>
  );
};

export default Skills;
