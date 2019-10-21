import axios from '@/axios.js'

const api = {
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  searchPlaceWords () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuNav () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getStyleData () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getHotCitys () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getProviceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getRecentCitys () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getGoodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getClassify () {
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  getPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getDetail () {
    return axios.get('/api/meituan/product/detail.json')
  },
  getLogin (data) {
    return axios.get('/api/meituan/login', {params: {...data}})
  },
  register (data) {
    return axios.get('/api/meituan/register', {params: {...data}})
  }
}

export default api
