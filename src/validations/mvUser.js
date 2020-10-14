import * as Yup from 'yup'

const changePassSchema = Yup.object().shape({
  password: Yup.string().required('password saat ini belum diisi'),
  newPassword: Yup.string().required('password baru belum diisi'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'ulangi password baru tidak cocok')
    .required('ulangi password baru belum diisi'),
})

const loginSchema = Yup.object().shape({
  email: Yup.string().email('gunakan email yang valid').required('email belum diisi'),
  password: Yup.string().required('password belum diisi'),
})

export { changePassSchema, loginSchema }
