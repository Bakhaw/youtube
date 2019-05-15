import axios from 'axios';
import config from './config';

const API = {
  getTrendingVideos: async function() {
    // ? maxResults 1 to 50
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&regionCode=FR&maxResults=50&key=${
        config.apiKey
      }`;
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getRelatedVideos: async function(videoId) {
    // ? maxResults 1 to 50
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=50&key=${
        config.apiKey
      }`;
      const { data } = await axios.get(url);
      return data.items;
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
    // ? maxResults 1 to 100
    try {
      const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&videoId=${videoId}&maxResults=100&key=${
        config.apiKey
      }`;
      const { data } = await axios.get(url);
      return data.items;
    } catch (err) {
      console.log(err);
    }
  },
  searchByQuery: async function(query) {
    // ? maxResults 1 to 50
    try {
      const url = ` https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${
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
