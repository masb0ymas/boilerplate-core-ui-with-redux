import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'
import { fileUploadPreview } from '../../helper'

const CfInputFile = ({
  field,
  form: { touched, errors, setFieldValue, setFieldTouched },
  // eslint-disable-next-line no-unused-vars
  ...props
}) => {
  const [filePreview, setfilePreview] = useState()
  const [fileType, setfileType] = useState()
  const [fileSize, setfileSize] = useState()

  const handleChangeImage = e => {
    const reader = new FileReader()
    const file = e.currentTarget.files[0]
    if (file) {
      reader.onloadend = () => {
        setfilePreview(file.name)
        setfileType(file.type)
        setfileSize(file.size)
      }
      reader.readAsDataURL(file)
      setFieldValue(field.name, file)
    }
  }
  return (
    <>
      <Input
        id={field.name}
        name={field.name}
        type="file"
        onBlur={() => setFieldTouched(field.name, true)}
        onChange={e => handleChangeImage(e)}
        style={{ marginBottom: '10px' }}
      />
      {touched[field.name] && errors[field.name] && (
        <span className="form-text text-danger">{errors[field.name]}</span>
      )}

      {filePreview && fileUploadPreview(filePreview, fileType, fileSize)}
    </>
  )
}

CfInputFile.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  form: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

export default CfInputFile
