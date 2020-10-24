import * as Yup from 'yup'

const create = Yup.object().shape({
  nama: Yup.string().required('nama role belum diisi'),
})

export default { create }
