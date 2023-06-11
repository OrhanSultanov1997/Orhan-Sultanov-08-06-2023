import React, { useState } from 'react'

export default function HomePage(props) {

    const [movieName, setMovieName] = useState('')


    const checkName = () => {

        if (movieName == '') {
            alert('Enter movie name')
            return false
        }
        for (let i = 0; i < movieName.length; i++) {
            if (movieName.charAt(i) < 'A' || movieName.charAt(i) > 'Z' && movieName.charAt(i) < 'a' || movieName.charAt(i) > 'z') {
            
                alert('english charts only')
                return false
            }
        }
        props.searchMovie(movieName)

    }

    const show = () => {
        if (props.flag) {
            return <div>
                <h3>Movie title : '{props.movie.Title}'</h3> 
                <h3>Release year : '{props.movie.Year}'  </h3>
                <img style={{width : '200px',height : '200px'}} src={props.movie.Poster} />
                <br />
                <button onClick={() => { props.addAndRemove(props.movie) }}  >Add/Remove </button>
            </div >
        }
    }
    return (
        <div>
            <input id='name' placeholder='enter movie name' type="text" onChange={(e) => { setMovieName(e.target.value) }} />
            <button onClick={checkName}  >Search</button>
            {show()}
        </div>
    )
}
