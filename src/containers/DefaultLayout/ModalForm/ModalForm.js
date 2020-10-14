import { Field, Form, Formik } from 'formik'
import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from 'reactstrap'
import { connect } from 'react-redux'
import { CfInput } from '../../../components'
import { changePassSchema } from '../../../validations/mvUser'
import { userData } from '../../../helpers'
import { changePass } from '../../../modules/auth/actions'
import { WithToggleProps } from '../../../HOC/withToggle'

const initialValues = {
  password: '',
  newPassword: '',
  confirmNewPassword: '',
}

function ModalForm(props) {
  // eslint-disable-next-line react/prop-types
  const { modalForm, className } = props

  function handleChangePassword(values) {
    const { changePass } = props
    const { id } = userData()

    changePass(values, id)
  }

  return (
    <>
      <Modal
        isOpen={modalForm.isOpen}
        toggle={modalForm.toggle}
        backdrop="static"
        className={className}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={changePassSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              handleChangePassword(values)
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <ModalHeader toggle={modalForm.hide}>Form Change Password</ModalHeader>

              <ModalBody>
                <FormGroup>
                  <Field
                    label="Password saat ini"
                    isRequired
                    type="password"
                    name="password"
                    placeholder="*******"
                    component={CfInput}
                  />
                </FormGroup>

                <FormGroup>
                  <Field
                    label="Password"
                    isRequired
                    type="password"
                    name="newPassword"
                    placeholder="*******"
                    component={CfInput}
                  />
                </FormGroup>

                <FormGroup>
                  <Field
                    label="Ulangi Password"
                    isRequired
                    type="password"
                    name="confirmNewPassword"
                    placeholder="*******"
                    component={CfInput}
                  />
                </FormGroup>
              </ModalBody>

              <ModalFooter>
                <Button type="button" color="secondary" onClick={modalForm.hide}>
                  Cancel
                </Button>
                &nbsp;
                <Button type="submit" color="primary" className="px-4" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Spinner size="sm" color="light" />
                      &nbsp;Loading...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  )
}

ModalForm.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  changePass: PropTypes.func,
  modalForm: WithToggleProps,
}

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
  message: state.auth.message,
})

const mapDispatchToProps = (dispatch) => ({
  changePass: (rowData, id) => dispatch(changePass(rowData, id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm)
