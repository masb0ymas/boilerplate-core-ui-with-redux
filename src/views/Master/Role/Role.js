/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Label,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  FormGroup,
} from 'reactstrap'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Service from '../../../config/services'
import { CfInput } from '../../../components'
import { requireLabel, AlertMessage, ErrorMessage } from '../../../helper'
import { createRole, updateRole, deleteRole } from '../../../modules/masterRole/actions'

const invalidValues = [undefined, null, '', false]

const roleSchema = Yup.object().shape({
  nama: Yup.string().required('nama role belum diisi'),
})

class Role extends Component {
  state = {
    modal: false,
    listRole: [],
    loading: true,
    pages: null,
    currentPage: 1,
    perPage: 10,
  }

  initialValues = {
    nama: '',
    id: '',
  }

  fetchDataTable = state => {
    const { page, pageSize, filtered, sorted } = state
    const filterString = JSON.stringify(filtered)
    const sortString = JSON.stringify(sorted)
    const params = `?page=${page}&pageSize=${pageSize}&sorted=${sortString}&filtered=${filterString}`
    const paramsEncode = encodeURI(params)

    Service.getRoles(paramsEncode).then(res => {
      this.setState({
        listRole: res.data.data,
        currentPage: page,
        perPage: pageSize,
        pages:
          parseInt(res.data.totalRow / pageSize, 10) + (res.data.totalRow % pageSize > 0 ? 1 : 0),
        loading: false,
      })
    })
  }

  handleShow = (e, state) => {
    const { modal } = this.state
    this.setState({
      modal: !modal,
    })

    this.initialValues = {
      nama: state.nama,
      id: state.id,
    }
  }

  toggle = () => {
    const { modal } = this.state
    this.setState({
      modal: !modal,
    })

    this.initialValues = {
      nama: '',
      id: '',
    }
  }

  handleSaveChanges = values => {
    const { id } = values
    const { createRole, updateRole } = this.props
    if (!invalidValues.includes(id)) {
      updateRole(values, id)
    } else {
      createRole(values)
    }
  }

  handleDelete = (e, state) => {
    e.preventDefault()

    const { id } = state
    const { deleteRole } = this.props

    AlertMessage.warning()
      .then(result => {
        if (result.value) {
          console.log('delete object', id)
          deleteRole(id)
        } else {
          const paramsResponse = {
            title: 'Huff',
            text: 'Hampir saja kamu kehilangan data ini',
          }
          AlertMessage.info(paramsResponse)
        }
      })
      .catch(err => {
        AlertMessage.error(err) // Internal Server Error
      })
  }

  render() {
    const columns = [
      {
        Header: '#',
        width: 60,
        filterable: false,
        Cell: props => <span>{props.index + 1}</span>,
      },
      {
        Header: 'Role',
        accessor: 'nama',
      },
      {
        Header: 'Edit',
        width: 60,
        filterable: false,
        Cell: props => (
          <Button
            color="success"
            onClick={e => this.handleShow(e, props.original)}
            className="mr-1"
            title="Edit"
          >
            <i className="fa fa-pencil" />
          </Button>
        ),
      },
      {
        Header: 'Delete',
        width: 60,
        filterable: false,
        Cell: props => (
          <Button
            color="danger"
            onClick={e => this.handleDelete(e, props.original)}
            className="mr-1"
            title="Delete"
          >
            <i className="fa fa-trash" />
          </Button>
        ),
      },
    ]

    const pageName = 'Role'
    const { listRole, modal, pages, loading } = this.state
    const { message, isLoading, auth, className } = this.props
    const isIcon = { paddingRight: '7px' }

    if (!auth) return <Redirect to="/login" />

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col sm="6">
                    <Button color="default" className="mr-1">
                      {pageName}
                    </Button>
                  </Col>
                  <Col sm="6">
                    <div style={{ textAlign: 'right' }}>
                      <Button color="primary" onClick={this.toggle} className="mr-1">
                        <i className="fa fa-plus" style={isIcon} />
                        &nbsp;Tambah
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <ReactTable
                  manual
                  filterable
                  data={listRole}
                  pages={pages}
                  columns={columns}
                  loading={loading}
                  defaultPageSize={10}
                  className="-highlight"
                  onFetchData={this.fetchDataTable}
                />
              </CardBody>
            </Card>

            <Modal isOpen={modal} toggle={this.toggle} className={className}>
              <Formik
                initialValues={this.initialValues}
                validationSchema={roleSchema}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    this.handleSaveChanges(values)
                    actions.setSubmitting(false)
                  }, 1000)
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <ModalHeader toggle={this.toggle}>Form Role</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <Label>
                          <b>Nama Role</b>
                          &nbsp;
                          {requireLabel()}
                        </Label>
                        <Field
                          type="text"
                          name="nama"
                          placeholder="Masukkan nama role"
                          component={CfInput}
                        />
                      </FormGroup>
                      {ErrorMessage(message)}
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
          </Col>
        </Row>
      </div>
    )
  }
}

Role.propTypes = {
  auth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  createRole: PropTypes.func.isRequired,
  updateRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated,
  isLoading: state.role.isLoading,
  message: state.role.message,
})

const mapDispatchToProps = dispatch => ({
  createRole: rowData => dispatch(createRole(rowData)),
  updateRole: (rowData, id) => dispatch(updateRole(rowData, id)),
  deleteRole: id => dispatch(deleteRole(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Role)
