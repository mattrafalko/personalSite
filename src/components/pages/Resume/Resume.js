import React from 'react';
import ResumeItem from './ResumeItem';
import ResumeDoc from '../../../assets/Resume.pdf';
import { motion } from 'framer-motion';
import { userData } from '../../../Config';

const Resume = () => {
  const { resumeData } = userData;

  return (
    <div className='mb-4'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-lg font-bold'>Resume</h2>

        <motion.a
          className='text-sm  text-green-600'
          href={ResumeDoc}
          download={ResumeDoc}
          whileHover={{ scale: 1.05 }}
        >
          Download
        </motion.a>
      </div>
      <div className='mb-4 divide-y-2'>
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
