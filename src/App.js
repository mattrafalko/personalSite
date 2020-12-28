import { Fragment } from 'react';
import MobileNav from './components/navigation/MobileNav';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import './App.css';
import Github from './components/pages/Github';
const App = () => {
  return (
    <Fragment>
      <div className='bg-white h-screen px-3 py-4 mb-48'>
        <AboutMe />
        <Github />
        <Resume />
      </div>
      <MobileNav />
    </Fragment>
  );
};

export default App;
