import React from 'react';

const AboutMe = () => {
  const techStack = [...'React, Node.js, Tailwind CSS, .Net, SQL'.split(',')];

  return (
    <div className='mb-2'>
      <h1 className='mb-2 text-2xl font-bold '>Matt Rafalko</h1>
      <h2 className='font-md text-gray-700'>Software Developer</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque modi rem
        distinctio saepe minus harum nobis architecto ipsa. Tempora a maiores
        error debitis corporis minima consequuntur voluptatem quidem maxime
        voluptates?
      </p>
      {techStack.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  );
};

export default AboutMe;
