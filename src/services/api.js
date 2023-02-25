import axios from 'axios';
const baseURL = `https://pixabay.com/api/?page=1&image_type=photo&orientation=horizontal&per_page=12`;

export const getPics = async (page, query) => {
  const options = {
    params: {
      page: page,
      q: query,
      key: '33913920-2ed363835b555a522d2b5db48',
    },
  };

  try {
    return await axios.get(baseURL, options);
  } catch (error) {
    console.log('error.name: ', error.name, 'error.message: ', error.message);
  }
};
