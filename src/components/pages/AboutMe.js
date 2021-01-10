import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LoadingContext } from '../../context/LoadingContext';
import { GithubContext } from '../../context/GitHubContext';
import Spinner from '../loaders/Spinner';

const AboutMe = () => {
  const { loading } = useContext(LoadingContext);
  const { githubUserInfo } = useContext(GithubContext);

  const userInfo = {
    description:
      'A software developer with a passion for anything front-end.\nLets work together.',
    imgAlt: 'My dog Apollo and I',
  };

  return (
    <div className='bg-gray-900 shadow-2xl'>
      <div className='container mb-2'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 36 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          className='bg-gray-100 border-2 border-gray-200 rounded px-4 py-3 mx-3 shadow-xl flex justify-between items-center'
        >
          {!loading && githubUserInfo ? cardData : <div className='loader' />}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
