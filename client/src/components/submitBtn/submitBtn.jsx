import React from 'react'

export default function submitBtn(props) {
  return (
    <div className="submitBtn d-grid gap-2">
        <input type="submit" className={props.className} value={props.value} />
    </div>
  )
}
