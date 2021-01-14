const ResumeItem = ({ data }) => {
  if (data) {
    return (
      <div className='mt-2'>
        <h3 className='text-md mb-1 font-bold hover:text-purple-700 transition duration-500 ease-in-out'>
          <a href={data.companySite} target='_blank' rel='noreferrer'>
            {data.company}
          </a>
        </h3>
        <div className='flex justify-between w-full items-center mb-2 text-gray-700 text-sm'>
          <h4 className=''>{data.title}</h4>
          <span>
            {data.dates.start} - {data.dates.end}
          </span>
        </div>
      </div>
    );
  }
};

export default ResumeItem;
