import ResumeItem from './ResumeItem';
import ResumeDoc from '../../../assets/Resume.pdf';
import { motion } from 'framer-motion';
import { userData } from '../../../Config';

const Resume = () => {
  const { resumeData } = userData;

  return (
    <div className='mb-4'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-lg font-bold dark:text-gray-200'>Resume</h2>
        <motion.a
          className='text-sm  text-gray-700 dark:text-indigo-300'
          href={ResumeDoc}
          download='Matt Rafalko Resume.pdf'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
        >
          Download
        </motion.a>
      </div>
      <div className='mb-4 divide-y-2 dark:divide-indigo-500'>
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
