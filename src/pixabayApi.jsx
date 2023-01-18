import axios from 'axios';
import PropTypes from 'prop-types';

async function fetchPage({ search }, page) {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=30736325-a2e05b73da6ab6fbbbda5c6db&q=${search}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchPage.prototypes = {
  search: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default fetchPage;
