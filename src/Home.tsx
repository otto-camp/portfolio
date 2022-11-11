import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}>
      <div className="box box__about">
        <motion.h1
          className="box__title"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 3px #fff' }}>
          <Link to="/about">About</Link>
        </motion.h1>
      </div>
      <div className="box box__edu">
        <motion.h1
          className="box__title"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 4px #fff' }}>
          <Link to="/education">Education</Link>
        </motion.h1>
      </div>
      <div className="box box__skills">
        <motion.h1
          className="box__title"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 4px #fff' }}>
          <Link to="/skills">Skills</Link>
        </motion.h1>
      </div>
      <div className="box box__work">
        <motion.h1
          className="box__title"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 4px #fff' }}>
          <Link to="/work-experience">Work</Link>
        </motion.h1>
      </div>
      <div className="box box__projects">
        <motion.h1
          className="box__title"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 4px #fff' }}>
          <Link to="/projects">Projects</Link>
        </motion.h1>
      </div>
      <div className="box box__contact">
        <motion.h1
          className="box__title"
          whileHover={{ scale: 1.1, textShadow: '0px 0px 4px #fff' }}>
          <Link to="/contact">Contact</Link>
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default Home;
