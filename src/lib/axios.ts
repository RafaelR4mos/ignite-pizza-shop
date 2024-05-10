import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (import.meta.env.VITE_ENABLE_API_DELAY === 'true') {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return config
  })
}
