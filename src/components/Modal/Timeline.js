import React from 'react'
import PropTypes from 'prop-types'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Done } from '@material-ui/icons'
import { formatMonthStandAlone } from '../../helpers/Date'
import './style.css'

function Timeline({ isModal, handleModal, classModal, HistoryPermohonan }) {
  return (
    <Modal
      isOpen={isModal}
      toggle={() => handleModal('isModalTimeline')}
      className={`modal-lg ${classModal}`}
    >
      <ModalHeader
        toggle={() => handleModal('isModalTimeline')}
        style={{ backgroundColor: '#209cee', color: '#fff', textAlign: 'center' }}
      >
        Timeline Pendaftaran
      </ModalHeader>
      <ModalBody className="has-background-light">
        <VerticalTimeline>
          {HistoryPermohonan &&
            HistoryPermohonan.map((row) => (
              <React.Fragment key={row.id}>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date={formatMonthStandAlone(new Date(row.createdAt))}
                  iconStyle={{
                    background: '#209cee',
                    color: '#fff',
                  }}
                  icon={<Done />}
                  style={{ color: '#209cee' }}
                >
                  <h1 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem' }}>
                    <b>{row.StatusPendaftaran.statusName}</b>
                  </h1>
                  <p
                    className="vertical-timeline-element-subtitle"
                    style={{ color: '#757575', fontSize: '1rem' }}
                  >
                    <span
                      style={{
                        padding: '10px 0',
                        color: '#757575',
                      }}
                    >
                      {`${row.User.fullName} - ${row.User.Role.roleName}`}
                    </span>
                  </p>
                  <p>{row.Keterangan}</p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
        </VerticalTimeline>
      </ModalBody>
    </Modal>
  )
}

Timeline.propTypes = {
  classModal: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  HistoryPermohonan: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  isModal: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object]),
  handleModal: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.node]),
}

export default Timeline
