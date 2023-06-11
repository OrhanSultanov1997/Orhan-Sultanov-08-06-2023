
import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './copmonents/HomePage';
import Favorites from './copmonents/Favorites';
import { useState } from 'react';

function App() {

  const [movie, setMovie] = useState({})
  const [favorite, setFavorite] = useState([])
  const [flag, setFlag] = useState(false)

  const searchMovie = (movieName) => {
    try {
      fetch(`http://www.omdbapi.com/?apikey=9120fed4&t=${movieName}`)
        .then(res => res.json())
        .then((data) => {
          if (data.Response == 'False') {
            alert(data.Error)
            setFlag(false)
          }
          else {
            setFlag(true)
            setMovie(data)
          }
        })
        .catch((err) => {
          if (err) console.log(err);
        })
    }
    catch (err) {
      console.log(err);
    }
  }

  const addAndRemove = (movies) => {
    let result = favorite.find((element) => (element.Title == movies.Title))
    if (result == undefined) {
      setFavorite([...favorite, movies])
    }
    else {
      let filter = favorite.filter((element) => (element.Title != movies.Title))
      setFavorite(filter)
    }

  }
  return (
    <div className="App">
      <HashRouter>
        <h1>Movie App</h1>
        <header>
          <Link to={'/'}> <button>Main</button></Link>
          <Link to={'/favorites'}  ><button>Favorites</button></Link>
        </header>


        <Routes>
          <Route path='/' element={<HomePage searchMovie={searchMovie} movie={movie} addAndRemove={addAndRemove} flag={flag} setFlag={setFlag} />} />
          <Route path='/favorites' element={favorite.map((val, index) => {
            return <Favorites val={val} setMovie={setMovie} setFlag={setFlag} />
          })} />
        </Routes>
      </HashRouter>





    </div>
  );
}

export default App;
