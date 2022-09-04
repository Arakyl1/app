import axios from 'axios'
import { BaseURL, SortDesc } from '@/main/url'

export default class Api {
  static GetItems (page, limit) {
    return axios.get(BaseURL + '/items?' + SortDesc + `&_page=${page}&_limit=${limit}`).then(res => res.data)
  }

  static GetItemsInfo (id) {
    return axios.get(BaseURL + '/items?id=' + id).then(res => res.data)
  }

  static GetItemsActual (arg) {
    return axios.get(BaseURL + `/items?${arg}=true`).then(res => res.data)
  }

  static GetArraySelectMeni () {
    return axios.get(BaseURL + '/select_menu').then(res => res.data[0].children)
  }

  static GetSelctMenu () {
    return axios.get(BaseURL + '/select_menu').then(res => res.data)
  }

  static GetHomeSlader () {
    return axios.get(BaseURL + '/slader').then(res => res.data)
  }

  static GetLengthItems () {
    return axios.get(BaseURL + '/length_items').then(res => res.data.length)
  }

  static GetShopContact () {
    return axios.get(BaseURL + '/shop').then(res => res.data)
  }

  static GetFooterInfo (url) {
    return axios.get(BaseURL + `/footer?name=${url}`).then(res => res.data[0].children)
  }

  static PostItems (el) {
    return axios.post(BaseURL + '/items', el)
  }

  static PatchItems (id) {
    console.log(id)
    return axios.patch(BaseURL + '/length_items', { length: id })
  }
}
