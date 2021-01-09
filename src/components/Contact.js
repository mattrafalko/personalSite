import React from 'react';
import { ReactSVG } from 'react-svg';
import Email from '../assets/icons/email.svg';
import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';

const Contact = () => {
  return (
    <div className='bg-gray-900 fixed bottom-0 px-3 py-4 w-full flex '>
      <div className='max-w-2xl w-full flex justify-between mx-auto'>
        <div className=''>
          <a href='mailto:mattrafalko@gmail.com'>
            <ReactSVG src={Email} />
          </a>
        </div>
        <div className=''>
          <a href='https://www.github.com/mattrafalko' target='_blank'>
            <ReactSVG src={Github} />
          </a>
        </div>
        <div className=''>
          <a href='https://www.linkedin.com/in/mrafalko' target='_blank'>
            <ReactSVG src={Linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
