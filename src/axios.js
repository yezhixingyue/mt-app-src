import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use((config) => {
  // console.log(config);
  config.params = {
    ...config.params,
    appkey: 'panda_1545214432912'
  }
  return config
}, err => Promise.reject(err))

export default axios
