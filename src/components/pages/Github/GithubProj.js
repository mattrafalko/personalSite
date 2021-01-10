import React from 'react';

const GithubProj = ({ project }) => {
  return (
    <div>
      <a href={project.html_url} target='_blank' rel='noreferrer'>
        <div className='mb-4 px-2 py-3 flex'>
          <div className='flex-1 flex items-center'>
            <div className='w-3/4 text-center projectLink'>
              <h3 className=' md:text-lg text-sm text-gray-100 bg-gray-900 hover:text-purple-100'>
                {project.name}
              </h3>
            </div>
          </div>
          <div className='flex-1'>
            <span className='text-sm'>{project.description}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GithubProj;
