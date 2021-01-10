import React from 'react';
import ResumeItem from './ResumeItem';
import ResumeDoc from '../../../assets/Resume.pdf';
import { motion } from 'framer-motion';

const Resume = () => {
  const resumeData = [
    {
      company: 'Uline',
      title: 'Software Developer',
      dates: {
        start: '2/2020',
        end: 'Current',
      },
    },
    {
      company: 'Milliman IntelliScript',
      title: 'Client Integration Engineer',
      dates: {
        start: '2/2018',
        end: '2/2020',
      },
    },
    {
      company: 'OmniVista Solutions',
      title: 'System Analyst - Intern',
      dates: {
        start: '1/2017',
        end: '5/2017',
      },
    },
    {
      company: 'Iowa State Foundation',
      title: 'Program Assistant',
      dates: {
        start: '9/2013',
        end: '8/2016',
      },
    },
  ];

  return (
    <div className='mb-4'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-lg font-bold'>Resume</h2>
        <motion.span
          className='text-sm  text-green-600'
          whileHover={{ scale: 1.05 }}
        >
          <a href={ResumeDoc} download={ResumeDoc}>
            Download
          </a>
        </motion.span>
      </div>
      <div className='mb-4'>
        {resumeData && resumeData.length > 0 ? (
          resumeData.map((item, i) => <ResumeItem data={item} key={i} />)
        ) : (
          <span>Loading</span>
        )}
      </div>
    </div>
  );
};

export default Resume;
