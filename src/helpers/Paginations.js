function getCurrentNumber(index, page, pageSize) {
  return Number(pageSize) * Number(page) + Number(index) + 1
}

export default { getCurrentNumber }
