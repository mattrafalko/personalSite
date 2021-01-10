import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
const AboutMe = () => {
  const [githubUserInfo, setGithubUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const userInfo = {
    description:
      'A software developer with a passion for anything front-end.\nLets work together.',
    imgAlt: 'My dog Apollo and I',
  };

  const getData = async () => {
    const githubData = await axios.get(
      `https://api.github.com/users/mattrafalko?client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
    );
    setGithubUserInfo(githubData.data);
    //setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  let cardData = (
    <React.Fragment>
      <div>
        <h1 className='text-2xl font-bold text-gray-900'>
          {githubUserInfo.name}
        </h1>
        <h2 className='font-md text-gray-800 mb-2'>
          {githubUserInfo.bio} •{' '}
          <a
            className='text-green-600'
            href={`https://www.${githubUserInfo.company}.com`}
            target='_blank'
            rel='noreferrer'
          >
            {githubUserInfo.company}
          </a>
        </h2>
        <div className='flex flex-col mb-2'>
          <p className='text-gray-700 whitespace-pre-wrap'>
            {userInfo.description}
          </p>
        </div>
      </div>
      <div className=''>
        <img
          className='rounded-full overflow-none w-32 h-auto border-2 border-green-500 shadow-lg'
          src={githubUserInfo.avatar_url}
          alt={userInfo.imgAlt}
        />
      </div>
    </React.Fragment>
  );

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
