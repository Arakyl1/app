export { nextSlade, prewSlade }

function nextSlade (data, sladerIndex, quantityItemSlader) {
  const itemLenghtSmall = (data.length / quantityItemSlader)
  const dif = itemLenghtSmall - sladerIndex - 1
  dif > 1 ? sladerIndex++ : sladerIndex = sladerIndex + dif
  return sladerIndex
}

function prewSlade (sladerIndex) {
  (sladerIndex >= 1) ? sladerIndex-- : sladerIndex = Math.floor(sladerIndex)
  return sladerIndex
}
