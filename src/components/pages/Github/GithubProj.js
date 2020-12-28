import React from 'react';

const GithubProj = ({ project }) => {
  return (
    <div className='mb-2'>
      <h3>
        <a href={project.html_url} target='_blank'>
          {project.name}
        </a>
      </h3>
      <span className='text-sm'>{project.description}</span>
    </div>
  );
};

export default GithubProj;
