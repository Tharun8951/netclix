import React, { useEffect, useState } from 'react'
import './FavoritesPages.scss'
import axios from 'axios'
import FavoritePageMovie from './FavoritePageMovie '
import Header from '../Header/Header'

function FavoritePage() {
  const [favMovies, setFavMovies] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/getmovies')
      .then((res) => {
        setFavMovies(res.data.data)
      })
      .catch((error) => {})
  }, [])

  return (
    <>
      <Header />
      <div>
        <div className="favcontainer">
          {favMovies.length === 0 ? (
            <div>
              <h1>Please add movies to your favorites.</h1>
            </div>
          ) : (
            favMovies.map((val, idx) => (
              <>
                <FavoritePageMovie
                  key={idx}
                  id={val._id}
                  img={val.img}
                  title={val.title}
                  description={val.description}
                  popularity={val.popularity}
                  language={val.language}
                  favMovies={favMovies}
                  setFavMovies={setFavMovies}
                />
                <hr />
              </>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default FavoritePage
