import axios from 'axios';

export const getGithubUserData = async () => {
  return await axios.get(
    `https://api.github.com/users/mattrafalko?client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
  );
};

export const getGithubProjectdata = async () => {
  const projects = await axios.get(
    `https://api.github.com/users/mattrafalko/repos?per_page=50&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENTID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENTSECRET}`
  );
  let filtered = projects.data.filter((x) => x.fork === false);
  return filtered;
};
