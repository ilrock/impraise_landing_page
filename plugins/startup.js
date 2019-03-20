export default function ({ app, $axios }) {
  const token = app.$cookies.get('token')
  $axios.onRequest((config) => {
    if (token) {
      config.headers.common['x-auth-token'] = token
    }
  })
}