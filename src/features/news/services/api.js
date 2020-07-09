import requester from 'features/_main/app/axios.js';

export default {
  getNews: ({ pageSize, page }) => {
    return requester.get(`/v2/top-headlines?country=us&category=technology&pageSize=${pageSize}&page=${page}`);
  }
};
