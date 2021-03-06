/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-task-modal"
        className="btn-floating btn-large blue modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#support-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="large material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#add-support-modal" className="btn-floating red modal-trigger">
            <i className="large material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AddBtn
