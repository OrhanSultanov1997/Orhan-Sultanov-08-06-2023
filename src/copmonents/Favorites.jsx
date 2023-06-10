import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Fivorit(props) {

    const nav = useNavigate()

    return (
        <div>

            <h1 onClick={() => { props.setMovie(props.val); nav('/') }}  >title : {props.val.Title}</h1>



        </div>
    )
}
