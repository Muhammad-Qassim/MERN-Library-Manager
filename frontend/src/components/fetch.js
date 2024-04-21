import axios from 'axios';

export const fetchBooks = () => {
  return axios.get('http://localhost:3000/books?status=true')
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const fetchCheckedOutBooks = () => {
  return axios.get('http://localhost:3000/books/checkedout')
    .then(res => res.data)
    .catch(err => console.log(err));
};