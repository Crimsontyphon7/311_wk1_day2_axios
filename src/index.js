// import axios here
const axios = require('axios');
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  axios(url)
  .then(function (response) {
    console.log(response)
  });
  axios(url).then(response => console.log(response));
  return axios(url);
}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  axios(url)
  return axios(url).then((results) => results.data)
}

const getMovieByIdFailure = () => {
  const fakeId = 5783 
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  axios(url)
  return axios(url).then(response => response.data).catch(error=> error.response.status)
  
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}