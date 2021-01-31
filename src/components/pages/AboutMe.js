import { useContext } from 'react';
import { motion } from 'framer-motion';
import { LoadingContext } from '../../context/LoadingContext';
import { GithubContext } from '../../context/GitHubContext';
import { userData } from '../../Config';
import Spinner from '../loaders/Spinner';
import Emoji from '../Emoji';

const AboutMe = () => {
  const { loading } = useContext(LoadingContext);
  const { githubUserInfo } = useContext(GithubContext);

  const { aboutMe, resumeData } = userData;
  const currentEmployer = resumeData[0];

  return (
    <div className='bg-gray-100 dark:bg-gray-900 shadow-sm border-b-2 dark:border-gray-900'>
      <div className='container mb-2 max-w-sm lg:max-w-2xl'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 36 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          className='bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-700 rounded px-4 py-3 mx-3 shadow-lg hover:shadow-xl flex justify-between items-center'
        >
          {!loading && githubUserInfo ? (
            <div className='flex flex-col lg:flex-row lg:justify-between lg:w-full w-full mx-auto'>
              <div className='flex flex-col items-center lg:items-baseline '>
                <h1
                  id='names'
                  className='text-2xl font-bold text-gray-900 dark:text-gray-100'
                >
                  <span className='name'> {githubUserInfo.name}</span>
                  <span className='altName text-red-600'>
                    {aboutMe.altName} <Emoji symbol='🇵🇱' label='polish flag' />
                  </span>
                </h1>

                <h2 className='font-md text-gray-800 dark:text-gray-200 mb-2'>
                  {currentEmployer.title} •{' '}
                  <a
                    className='text-gray-300 dark:text-indigo-300'
                    href={currentEmployer.companySite}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {currentEmployer.company}
                  </a>
                </h2>
                <div className='flex flex-col mb-2 text-center lg:text-left'>
                  <p className='text-gray-700 dark:text-gray-200 lg:whitespace-pre-wrap'>
                    {aboutMe.description}
                  </p>
                </div>
              </div>
              <div className='flex justify-center md:justify-end'>
                <img
                  className='rounded-full overflow-none w-32 h-32 border-2 border-gray-200 dark:border-indigo-500 shadow-2xl lg:shadow-lg mx-auto transform translate-y-16 -mt-16 lg:mt-0 lg:translate-y-0'
                  src={githubUserInfo.avatar_url}
                  alt={aboutMe.imgAlt}
                />
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
