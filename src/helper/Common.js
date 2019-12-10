import jwt from 'jsonwebtoken'

const userData = () => {
  const token = localStorage.getItem('token')
  let User = ''

  if (token) {
    let getToken = ''
    const splitToken = token.split(' ')
    if (splitToken.length === 2) {
      ;[, getToken] = splitToken
    }

    User = jwt.decode(getToken)
  }
  return User
}

const formDataFilterByKeys = objFormData => {
  const formData = new FormData()
  const ObjKeys = Object.keys(objFormData)

  for (let i = 0; i < ObjKeys.length; i += 1) {
    const dataItems = ObjKeys[i]
    if (objFormData[dataItems]) {
      formData.append(dataItems, objFormData[dataItems])
    }
  }
  return formData
}

export { userData, formDataFilterByKeys }
