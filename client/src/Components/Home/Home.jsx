import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'

const apiKey = '0d0383928004a61902a15af68a3741ae'
const url = 'https://api.themoviedb.org/3/movie'
const imgUrl = 'https://image.tmdb.org/t/p/w500'

const upcoming = 'upcoming'
const popular = 'popular'
const toprated = 'top_rated'
const nowplaying = 'now_playing'

const Card = ({ img }) => {
  return (
    <>
      <img className="card" src={img} alt="card img" />
    </>
  )
}

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => {
          let data = item
          return (
            <Link to={'/CardDeatails'} state={{ data: data }}>
              <Card
                key={index}
                name={item.name}
                img={`${imgUrl}/${item.poster_path}`}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const Home = () => {
  const navigate = useNavigate()
  const [upComingMovies, setupComingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, settopRatedMovies] = useState([])
  const [nowPlayingMovies, setnowPlayingMovies] = useState([])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
      setupComingMovies(results)
    }
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
      setPopularMovies(results)
    }
    const fetchToprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${toprated}?api_key=${apiKey}`)
      settopRatedMovies(results)
    }
    const fetchnowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowplaying}?api_key=${apiKey}`)
      setnowPlayingMovies(results)
    }

    fetchUpcoming()
    fetchPopular()
    fetchToprated()
    fetchnowplaying()
  }, [])

  const handleAddToFav = () => {
    ;<Link to="/favoritepage"> </Link>
  }

  return (
    <>
      <Header />
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: popularMovies[0]
              ? `url(${`${imgUrl}/${popularMovies[11].poster_path}`})`
              : 'rgb(16, 16, 16)',
          }}
        >
          {popularMovies[0] && <h1>{popularMovies[11].original_title}</h1>}
          {popularMovies[0] && <p>{popularMovies[11].overview}</p>}

          <div>
            {localStorage.getItem('authTokenNetclix') ? (
              <Link to={'/favoritepage'} className="example">
                <button>
                  <AiOutlinePlus /> My List
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  alert('Please login first')
                }}
              >
                <AiOutlinePlus /> My List
              </button>
            )}
            <button>
              <BiPlay /> Play
            </button>
          </div>
        </div>

        <Row title="Upcoming Movies" arr={upComingMovies} />
        <Row title="Popular Movies" arr={popularMovies} />
        <Row title="Top Rated" arr={topRatedMovies} />
        <Row title="Now Playing" arr={nowPlayingMovies} />
      </section>
    </>
  )
}

export default Home
