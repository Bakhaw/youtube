import axios from 'axios';
import config from './config';

const API = {
  getPopularVideos: async function() {
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=FR&maxResults=50&key=${
        config.apiKey
      }`;
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};

export default API;
