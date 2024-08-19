import axios from 'axios';
export default axios.create({
  baseURL: process.env.React_App_Base_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
