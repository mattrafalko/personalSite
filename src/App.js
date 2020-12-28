import { Fragment } from 'react';
import MobileNav from './components/navigation/MobileNav';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume/Resume';
import './App.css';
import Github from './components/pages/Github/Github';
import Contact from './components/pages/Contact';
const App = () => {
  return (
    <Fragment>
      <div className='bg-white px-3 py-4 mb-48'>
        <AboutMe />
        <Github />
        <Resume />
        <Contact />
      </div>
      <MobileNav />
    </Fragment>
  );
};

export default App;
