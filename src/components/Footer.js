import React from 'react';
import { ReactSVG } from 'react-svg';
import Email from '../assets/icons/email.svg';
import Github from '../assets/icons/github.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import { motion } from 'framer-motion';
import { userData } from '../Config';

const Footer = () => {
  const icons = { email: Email, linkedIn: Linkedin, github: Github };
  const { links } = userData;

  const items = Object.keys(icons).map((x) => {
    return { link: links[x], icon: icons[x] };
  });

  const footerIcons = items.map((item, i) => (
    <motion.div whileHover={{ scale: 1.2 }} key={i}>
      <a href={item.link}>
        <ReactSVG src={item.icon} />
      </a>
    </motion.div>
  ));

  return (
    <React.Fragment>
      <div className='bg-gray-900 fixed bottom-0 px-5 py-4 w-full flex border-t-2 border-green-500'>
        <div className='max-w-2xl w-full flex justify-between mx-auto pb-1'>
          {footerIcons}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
