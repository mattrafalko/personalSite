import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GithubProj from './GithubProj';

const Github = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const githubData = await axios.get(
      `https://api.github.com/users/mattrafalko/repos?per_page=50&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
    );
    setProjects(githubData.data.filter((item) => !item.fork && !item.private));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`${loading ? 'animate-pulse' : null}`}>
      <h1 className='text-lg font-bold mb-2'>GitHub Projects</h1>
      <div>
        {projects && projects.length > 0 ? (
          projects.map((project, i) => <GithubProj project={project} key={i} />)
        ) : (
          <span> Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Github;
