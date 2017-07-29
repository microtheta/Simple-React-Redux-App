import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3000/mock/',
  headers: {'X-Custom-Header': 'foobar'} //may be add token ?
});


export default server;