import { Fragment } from 'react';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume/Resume';
import './App.css';
import Github from './components/pages/Github/Github';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <Fragment>
      <AboutMe />
      <motion.div
        className='container px-3 py-4 pt-20 mb-48'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Resume />
        <Github />
      </motion.div>
      <Contact />
    </Fragment>
  );
};

export default App;
