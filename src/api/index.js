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
  getVideosByMultipleIds: async function(videoIds) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${
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
  },
  getVideoComments: async function(videoId) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=${videoId}&key=${
        config.apiKey
      }`;
      const { data } = await axios.get(url);
      return data.items;
    } catch (err) {
      console.log(err);
    }
  },
  searchByQuery: async function(query) {
    try {
      const url = ` https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${
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
