import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'x-timezone-offset': -new Date().getTimezoneOffset(),
    'Access-Control-Allow-Origin': '*',
  },
})

export const VERSION = '1.4.0'
