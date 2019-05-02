import axios from 'axios';
import config from './config';

const API = {
  getTrendingVideos: async function() {
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=FR&maxResults=5&key=${
        config.apiKey
      }`;
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getVideoById: async function(videoId) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${
        config.apiKey
      }`;
      const { data } = await axios.get(url);
      return data.items;
    } catch (err) {
      console.log(err);
    }
  }
};

export default API;
