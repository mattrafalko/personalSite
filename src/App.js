import { Fragment, useState, useEffect, lazy, Suspense } from 'react';
import AboutMe from './components/pages/AboutMe';
import './App.css';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { GithubContext } from './context/GitHubContext';
import { LoadingContext } from './context/LoadingContext';
import { getGithubProjectdata, getGithubUserData } from './context/UserData';
import Loader from './components/loaders/Loader';

const ResumeComponent = lazy(() => import('./components/pages/Resume/Resume'));
const GithubComponent = lazy(() => import('./components/pages/Github/Github'));

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
            <Suspense fallback={Loader}>
              <ResumeComponent />
            </Suspense>
            <Suspense fallback={Loader}>
              <GithubComponent />
            </Suspense>
          </motion.div>
          <Footer />
        </GithubContext.Provider>
      </LoadingContext.Provider>
    </Fragment>
  );
};

export default App;
