import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GithubProj from './GithubProj';

const Github = () => {
  const [projects, setProjects] = useState([]);

  const getGithubData = async () =>
    axios.get(
      `https://api.github.com/users/mattrafalko/repos?per_page=50&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
    );

  useEffect(async () => {
    const githubData = await getGithubData();

    setProjects(githubData.data.filter((item) => !item.fork && !item.private));
  }, []);

  return (
    <div>
      <h1 className='text-lg font-bold mb-1'>GitHub</h1>
      {projects && projects.length > 0 ? (
        projects.map((project, i) => <GithubProj project={project} key={i} />)
      ) : (
        <span> Loading...</span>
      )}
    </div>
  );
};

export default Github;
