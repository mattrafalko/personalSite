import { Fragment, useState, useEffect } from 'react';
import AboutMe from './components/pages/AboutMe';
import './App.css';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { GithubContext } from './context/GitHubContext';
import { LoadingContext } from './context/LoadingContext';
import { getGithubProjectdata, getGithubUserData } from './context/UserData';
import Resume from './components/pages/Resume/Resume';
import Github from './components/pages/Github/Github';

const App = () => {
  const [projects, setProjects] = useState(null);
  const [githubUserInfo, setGithubUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const userInfo = await getGithubUserData();
    const projectData = await getGithubProjectdata();

    setProjects(projectData);
    setGithubUserInfo(userInfo.data);
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <LoadingContext.Provider value={{ loading }}>
        <GithubContext.Provider value={{ projects, githubUserInfo }}>
          <AboutMe />
          <motion.div
            className='container px-3 py-4 pt-20 mb-24'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Resume />
            <Github />
          </motion.div>
          <Footer />
        </GithubContext.Provider>
      </LoadingContext.Provider>
    </Fragment>
  );
};

export default App;
