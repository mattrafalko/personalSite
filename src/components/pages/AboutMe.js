import { useContext, Fragment } from 'react';
import { motion } from 'framer-motion';
import { LoadingContext } from '../../context/LoadingContext';
import { GithubContext } from '../../context/GitHubContext';
import { userData } from '../../Config';
import Spinner from '../loaders/Spinner';

const AboutMe = () => {
  const { loading } = useContext(LoadingContext);
  const { githubUserInfo } = useContext(GithubContext);

  const { aboutMe, resumeData } = userData;
  const currentEmployer = resumeData[0];

  return (
    <div className='bg-gray-900 shadow-2xl'>
      <div className='container mb-2'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 36 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          className='bg-gray-100 border-2 border-gray-200 rounded px-4 py-3 mx-3 shadow-xl flex justify-between items-center'
        >
          {!loading && githubUserInfo ? (
            <Fragment>
              <div>
                <h1 className='text-2xl font-bold text-gray-900'>
                  {githubUserInfo.name}
                </h1>
                <h2 className='font-md text-gray-800 mb-2'>
                  {currentEmployer.title} •{' '}
                  <a
                    className='text-green-700'
                    href={currentEmployer.companySite}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {currentEmployer.company}
                  </a>
                </h2>
                <div className='flex flex-col mb-2'>
                  <p className='text-gray-700 whitespace-pre-wrap'>
                    {aboutMe.description}
                  </p>
                </div>
              </div>
              <div className=''>
                <img
                  className='rounded-full overflow-none w-32 h-auto border-2 border-green-500 shadow-lg'
                  src={githubUserInfo.avatar_url}
                  alt={aboutMe.imgAlt}
                />
              </div>
            </Fragment>
          ) : (
            <Spinner />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
