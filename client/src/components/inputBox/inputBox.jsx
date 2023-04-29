import React from 'react'

export default function (props) {
  return (
    <div className={props.className}>
        <div><h4>{props.inputTitle}</h4></div>
        <input type={props.inputType} onChange={props.handleChange} className="form-control" placeholder={props.placeHolder} name={props.inputName} aria-describedby="basic-addon1" value={props.value} required/>
    </div>
  )
}
