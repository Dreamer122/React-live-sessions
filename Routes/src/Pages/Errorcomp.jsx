import React from 'react'
import {useRouteError} from "react-router"

export const Errorcomp = () => {
    const error=useRouteError()
    console.log(error)
  return (
    <div>Errorcomp
        <h4>{error.status}</h4>
        <h5>{error.statusText}</h5>
        <h5>{error.data}</h5>

    </div>
  )
}
