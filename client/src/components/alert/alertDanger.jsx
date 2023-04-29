import React from 'react'

export default function alertDanger(props) {
  return (
    <div className="alert alert-danger text-center" role="alert">
        <h5>{props.msg}</h5>
    </div>
  )
}
