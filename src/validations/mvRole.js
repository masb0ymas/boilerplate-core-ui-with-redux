import * as Yup from 'yup'

const roleSchema = Yup.object().shape({
  nama: Yup.string().required('nama role belum diisi'),
})

export default roleSchema
