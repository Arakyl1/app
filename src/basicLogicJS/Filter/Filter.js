import FilterAPI from './FilterAPI'

export default class Filter {
  static FilterOur (f, p, l) {
    return FilterAPI.GetFilterApi(f, p, l).then(res => res.data)
  }

  static ListMaker (cat) {
    return FilterAPI.GetCategorList(cat).then(res => res.data)
  }
}
