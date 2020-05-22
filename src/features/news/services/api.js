export default {
  getNews: (pageSize, page) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=${pageSize}&page=${page}&apiKey=abc92bff58e14fc39700e8ac5ec900a1`
    return fetch(proxyUrl + targetUrl).then(blob => blob.json()).then(response =>
      response
    );
  }
};
