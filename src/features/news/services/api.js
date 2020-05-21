export default {
  getNews: (pageSize, page) => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=${pageSize}&page=${page}&apiKey=abc92bff58e14fc39700e8ac5ec900a1`).then(response =>
      response.json()
    );
  }
};
