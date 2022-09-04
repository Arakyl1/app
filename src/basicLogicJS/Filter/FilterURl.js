function getCategorURL (cat) {
  if (cat !== 'Категория' && cat !== undefined) {
    cat = cat.split(' ').join('%20')
    return `categor=${cat}`
  }
  return ''
}

function getPriceURl (price) {
  if (price !== undefined) {
    if (price.from !== '' && price.upTo !== '') return `&price_gte=${price.from}&price_lte=${price.upTo}`
    if (price.from !== '') return `&price_gte=${price.from}`
    if (price.upTo !== '') return `&price_lte=${price.upTo}`
  }
  return ''
}

function getOptionalURL (arr, arg) {
  if (arr !== undefined && arr.length !== 0) {
    return arr.map(el => `&${arg}=${el}`).join('')
  }
  return ''
}

function getRantingURl (num) {
  if (num !== undefined && num !== 0) {
    return `&ranting_gte=${num}`
  }
  return ''
}
function getActual (arr) {
  if (arr !== undefined && arr.length !== 0) {
    return arr.map(el => `&${el}=true`).join('')
  }
  return ''
}

function getFilterUrl (fil) {
  console.log(fil)
  const cat = () => getCategorURL(fil?.cat)
  const price = () => getPriceURl(fil?.price)
  const maker = () => getOptionalURL(fil?.maker, 'maker')
  const ranting = () => getRantingURl(fil?.ranting)
  const actual = () => getActual(fil?.actual)
  const other = () => getActual(fil?.other)
  const primaryURl = `/items?${cat()}${price()}${maker()}${ranting()}${actual()}${other()}`
  const check = primaryURl.split('')
  checkAper()
  function checkAper () {
    if (check[7] === '&') {
      check.splice(7, 1)
      checkAper()
    }
  }
  const filterURl = check.join('')
  return filterURl
}

export { getFilterUrl, getCategorURL }
