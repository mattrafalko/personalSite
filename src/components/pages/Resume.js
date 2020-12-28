import React from 'react';
import ResumeItem from './ResumeItem';

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
      <div className=''>
        <h2 className='text-lg font-bold'>Resume</h2>
      </div>
      <div className='mb-2'>
        {resumeData && resumeData.length > 0 ? (
          resumeData.map((item, i) => <ResumeItem data={item} key={i} />)
        ) : (
          <span>Loading</span>
        )}
      </div>
      <div className='flex w-full justify-center'>
        <button className='rounded bg-gray-700 hover:bg-gray-600 w-full px-2 py-2 shadow-lg'>
          <span className='font-sm text-gray-200 '>Download</span>
        </button>
      </div>
    </div>
  );
};

export default Resume;
