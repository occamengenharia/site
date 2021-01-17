import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://cms-occam.herokuapp.com',
  withCredentials: true
})

export default api
