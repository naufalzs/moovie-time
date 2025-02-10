import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_KEY}`,
    'Content-Type': 'application/json',
  },
})

export default api
