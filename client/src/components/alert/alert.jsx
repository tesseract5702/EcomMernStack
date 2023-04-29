import React from 'react'

export default function alert(props) {
  return (
    <div className="alert alert-success text-center" role="alert">
        <h5>{props.msg}</h5>
    </div>
  )
}
