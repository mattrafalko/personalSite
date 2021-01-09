import { Fragment } from 'react';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume/Resume';
import './App.css';
import Github from './components/pages/Github/Github';
import Contact from './components/Contact';

const App = () => {
  return (
    <Fragment>
      <AboutMe />
      <div className='container px-3 py-4 pt-20 mb-48'>
        <Resume />
        <Github />
      </div>
      <Contact />
    </Fragment>
  );
};

export default App;
