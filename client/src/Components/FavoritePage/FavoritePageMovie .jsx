import React from 'react'
import './FavoritesPages.scss'
import axios from 'axios'

export default function FavoritePageMovie({
  title,
  description,
  popularity,
  language,
  img,
  id,
  favMovies,
  setFavMovies,
}) {
  const deleteHandler = async () => {
    const idToDelete = { id }
    try {
      await axios
        .post('http://localhost:8080/api/deletemovie', idToDelete)
        .then((res) => {
          setFavMovies(prevFavMovies => prevFavMovies.filter(movie => movie._id !== id));
        })
        .then(() => {

        })
    } catch (err) {
    }
  }

  return (
    <div className="containerFavPage">
      <div className="favoritepagemovie">
        <img src={img} alt="#" />
        <div className="titleDesc">
          <h3>{title}</h3>
          <p>Popularity: {popularity}</p>
          <p>Language: {language}</p>
        </div>
        <button onClick={deleteHandler}>remove</button>
      </div>
    </div>
  )
}
