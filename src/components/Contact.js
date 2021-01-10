import React from 'react';
import { ReactSVG } from 'react-svg';
import Email from '../assets/icons/email.svg';
import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='bg-gray-900 fixed bottom-0 px-3 py-4 w-full flex '>
      <div className='max-w-2xl w-full flex justify-between mx-auto'>
        <motion.div className='' whileHover={{ scale: 1.2 }}>
          <a href='mailto:mattrafalko@gmail.com'>
            <ReactSVG src={Email} />
          </a>
        </motion.div>
        <motion.div className='' whileHover={{ scale: 1.2 }}>
          <a
            href='https://www.github.com/mattrafalko'
            target='_blank'
            rel='noreferrer'
          >
            <ReactSVG src={Github} />
          </a>
        </motion.div>
        <motion.div className='' whileHover={{ scale: 1.2 }}>
          <a
            href='https://www.linkedin.com/in/mrafalko'
            target='_blank'
            rel='noreferrer'
          >
            <ReactSVG src={Linkedin} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
