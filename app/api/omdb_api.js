import axios from 'axios';

module.exports = (movie) => {
  let api_key = '60f7bdd3';
  let api_url = `https://www.omdbapi.com/?apikey=${api_key}&t=${movie}`;

  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=44e8edd5
  // Poster API: http://img.omdbapi.com/?i=tt3896198&h=600&apikey=44e8edd5

  return axios.get(api_url, {
	headers: {
		'content-type': 'application/json',
		'accept': 'application/json'
	}
}).then((results) => {
  	return results
  });
};
