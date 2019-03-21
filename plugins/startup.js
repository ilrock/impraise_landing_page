export default function ({ $axios, env }) {
  $axios.interceptors.request.use( (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${process.env.personalToken}`
    }
    // Do something before request is sent
    return config;
  }, (error) => {
    return Promise.reject(error)
  })
}