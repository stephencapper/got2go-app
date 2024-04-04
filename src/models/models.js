import axios from 'axios';

const getRestrooms = () => {
  return axios.get('/api/restrooms');
}

const postRestroom = (restroom) => {
  return axios.post('/api/restrooms', restroom);
}

const putRestroom = (restroom) => {
  return axios.put('/api/restrooms', restroom);
}

export { getRestrooms, postRestroom, putRestroom };
