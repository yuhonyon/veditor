export const removeNull = (data) => {
  const getValue = obj => {
    let newObj = {}
    for (let key in obj) {
      if (obj[key] !== null) {
        if (obj[key].constructor === Object) {
          newObj[key] = getValue(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }

  return getValue(data)
}
