import React from 'react'

export default function button(props) {
  return (
    <div className="d-grid gap-2">
        <button className={props.className}>{props.value}</button>
    </div>
  )
}
