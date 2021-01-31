const GithubProj = ({ project }) => {
  return (
    <div>
      <div className='mb-4 px-2 py-3 flex flex-col border-2 border-solid border-gray-300 rounded hover:shadow-md'>
        <div className='transform -translate-y-7'>
          <span className='md:text-lg text-sm bg-white px-1'>
            {project.name}
          </span>
        </div>
        <div className='-mt-5 mb-2'>
          <span className='text-sm'>{project.description}</span>
        </div>
        <div className='flex justify-end items-center'>
          <a href={project.html_url} target='_blank' rel='noreferrer'>
            <button className='text-gray-700 hover:text-gray-100 border-gray-500 hover:border-gray-800 hover:bg-gray-800 border-2 border-solid hover:shadow-md  px-3 rounded transition ease-in'>
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubProj;
