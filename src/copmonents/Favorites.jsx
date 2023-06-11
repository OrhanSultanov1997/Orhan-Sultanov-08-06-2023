import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Favorites(props) {

    const nav = useNavigate()

    return (
        <div>
            <hr />
            <h1 onClick={() => { props.setMovie(props.val); props.setFlag(true); nav('/') }}  >title : '{props.val.Title}'</h1>
            <hr />


        </div>
    )
}
