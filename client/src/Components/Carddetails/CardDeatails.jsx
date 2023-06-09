import React from 'react'
import './CardDeatails.scss'
import { useLocation } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import Header from '../Header/Header'
const imgUrl = 'https://image.tmdb.org/t/p/w500'

const CardDeatails = () => {

  const location = useLocation()
  const data = location.state?.data
  // console.log(data)

  const handleAddToFav = async() => {
    const dataToSend = {
      title: data.original_title,
      language: data.original_language,
      popularity: data.popularity,
      description: data.overview,
      img: `${imgUrl}/${data.backdrop_path}`
    }
    axios
      .post('http://localhost:8080/api/addmovie', dataToSend)
      .then((res) => {
        if(res.data.success === true){
          alert('added to favorites successfully')
        }
      })
      .catch((error) => {
      })
  }
  return (
    <>
  <Header />

    <div className="container">
      <div className="title_desc">
        <h1 className="maintitle">{data.original_title}</h1>
        <h4>POPULARITY: {data.popularity}</h4>
        <h4>LANGUAGE: {data.original_language}</h4>
        <p>{data.overview}</p>
        <div className="button">
          <button onClick={handleAddToFav}>
            <AiOutlinePlus />
            Add To Favorites
          </button>
        </div>
      </div>
      <img
        src={`${imgUrl}/${data.backdrop_path}`}
        alt="movie_background_img"
        className="movieimg_carddetails"
      />
    </div>
    </>
  )
}

export default CardDeatails
