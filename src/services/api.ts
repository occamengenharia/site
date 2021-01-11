import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'localhost:3000',
  withCredentials: true
})

export default api
