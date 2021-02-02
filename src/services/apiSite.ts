import axios from 'axios'

const apiSite = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000/api'
})

export default apiSite
