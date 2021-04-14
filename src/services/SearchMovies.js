import axios from 'axios';

const apiKey = '62a9ccac1046b7fcbbfc478d026ca990';

const fetchImagesWithQuery = (searchQuery = '') => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&include_adult=false&query=${searchQuery}`,
    )
    .then(response => response.data.results);
};

export default { fetchImagesWithQuery };
