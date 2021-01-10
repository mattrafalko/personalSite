import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import Email from '../assets/icons/email.svg';
import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import { motion } from 'framer-motion';
import { GithubContext } from '../context/GitHubContext';
import { userData } from '../context/UserData';
const Footer = () => {
  const { githubUserInfo } = useContext(GithubContext);

  const { html_url } = githubUserInfo;

  return (
    <React.Fragment>
      <div className='bg-gray-900 fixed bottom-0 px-5 py-4 w-full flex border-t-2 border-green-500'>
        <div className='max-w-2xl w-full flex justify-between mx-auto pb-1'>
          <motion.div className='' whileHover={{ scale: 1.2 }}>
            <a href={`mailto:${userData.links.email}`}>
              <ReactSVG src={Email} />
            </a>
          </motion.div>
          {githubUserInfo ? (
            <motion.div className='' whileHover={{ scale: 1.2 }}>
              <a href={html_url} target='_blank' rel='noreferrer'>
                <ReactSVG src={Github} />
              </a>
            </motion.div>
          ) : null}
          <motion.div className='' whileHover={{ scale: 1.2 }}>
            <a href={userData.links.linkedIn} target='_blank' rel='noreferrer'>
              <ReactSVG src={Linkedin} />
            </a>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
