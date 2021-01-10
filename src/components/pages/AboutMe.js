import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
const AboutMe = () => {
  const [userInfo, setUserInfo] = useState({});

  const getData = async () => {
    const githubData = await axios.get(
      `https://api.github.com/users/mattrafalko?client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
    );
    setUserInfo(githubData.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='bg-gray-900 '>
      <div className='container mb-2'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 36 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          className='bg-gray-100 border-2 border-gray-200 rounded px-4 py-3 mx-3 shadow-2xl flex justify-between items-center'
        >
          <div>
            <h1 className='text-2xl font-bold text-gray-900'>
              {userInfo.name}
            </h1>
            <h2 className='font-md text-gray-700 mb-2'>
              {userInfo.bio} • {userInfo.company}
            </h2>

            <div className='flex flex-col mb-2'>
              <span className='text-gray-900'>
                A software developer with a passion for anything front-end.
              </span>
              <span className='text-gray-900'> Lets work together.</span>
            </div>
          </div>
          <div className=''>
            <img
              className='rounded-full overflow-none w-32 h-auto'
              src={userInfo.avatar_url}
              alt='me and my dog, Apollo'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
