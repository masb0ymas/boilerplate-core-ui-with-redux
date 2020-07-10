import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
  FormGroup,
} from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react'
import { signOut, changePass } from '../../modules/auth/actions'
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import { CfInput } from '../../components'
import { userData } from '../../helpers'

const initialValues = {
  currentPassword: '',
  password: '',
  confirmPassword: '',
}

const changePassSchema = Yup.object().shape({
  currentPassword: Yup.string().required('password saat ini belum diisi'),
  password: Yup.string().required('password belum diisi'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'ulangi password tidak cocok')
    .required('ulangi password belum diisi'),
})

class DefaultHeader extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    const { modal } = this.state
    this.setState({
      modal: !modal,
    })
  }

  handleChangePassword = (values) => {
    const { changePass } = this.props
    const { _id } = userData()
    console.log('Change Password', values)
    changePass(values, _id)
  }

  render() {
    const { modal } = this.state
    // eslint-disable-next-line
    const { isLoading, signOut, className, children, ...attributes } = this.props

    return (
      <>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>

          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              Hallo, Admin
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src="../../assets/img/avatars/6.jpg"
                className="img-avatar"
                alt="admin@bootstrapmaster.com"
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem onClick={this.toggle}>
                <i className="fa fa-user" />
                &nbsp; Change Password
              </DropdownItem>
              <DropdownItem onClick={signOut}>
                <i className="fa fa-lock" />
                &nbsp; Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/* <AppAsideToggler className="d-lg-none" mobile /> */}

        <Modal isOpen={modal} toggle={this.toggle} backdrop="static" className={className}>
          <Formik
            initialValues={initialValues}
            validationSchema={changePassSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                this.handleChangePassword(values)
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ModalHeader toggle={this.toggle}>Form Change Password</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Field
                      label="Password saat ini"
                      isRequired
                      type="password"
                      name="currentPassword"
                      placeholder="*******"
                      component={CfInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Field
                      label="Password"
                      isRequired
                      type="password"
                      name="password"
                      placeholder="*******"
                      component={CfInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Field
                      label="Ulangi Password"
                      isRequired
                      type="password"
                      name="confirmPassword"
                      placeholder="*******"
                      component={CfInput}
                    />
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button type="button" color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                  &nbsp;
                  <Button
                    type="submit"
                    color="primary"
                    className="px-4"
                    disabled={isSubmitting || isLoading}
                  >
                    {isSubmitting || isLoading ? (
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
}

DefaultHeader.propTypes = {
  children: PropTypes.node,
  changePass: PropTypes.func,
}

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
  message: state.auth.message,
  success: state.auth.success,
  isLoading: state.auth.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  changePass: (rowData, id) => dispatch(changePass(rowData, id)),
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader)
