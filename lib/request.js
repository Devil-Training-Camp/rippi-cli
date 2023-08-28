import axios from 'axios';

axios.interceptors.response.use((res) => {
  return res.data;
});

// 获取模板的更新时间
export const fetchRepoTime = () => {
  return axios.get('https://api.github.com/repos/rippi-cli-template/react/branches/React+js');
}

// 这里是获取模板仓库的所有分支，url写自己的模板仓库url
export const fetchRepoList = () => {
  return axios.get('https://api.github.com/repos/rippi-cli-template/react/branches');
};