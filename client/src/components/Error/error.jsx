import React from 'react'
import style from '../Error/style.module.css'

export default function error(props) {
  return (
    <div className={style.errorBox}>
        <h5>{props.error}</h5>
    </div>
  )
}
