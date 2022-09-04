import axios from 'axios'
import { BaseURL, SortDesc } from '@/main/url'
import { getFilterUrl, getCategorURL } from './FilterURl'

export default class FilterAPI {
  static GetFilterApi (fil, page, limit) {
    return axios.get(BaseURL + getFilterUrl(fil) + '&' + SortDesc + `&_page=${page}&_limit=${limit}`)
  }

  static GetCategorList (cat) {
    return axios.get(BaseURL + '/items?' + getCategorURL(cat))
  }
}
