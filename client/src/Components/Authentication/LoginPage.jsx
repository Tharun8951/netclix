import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './authentication.scss'


export default function LoginPage() {
  const navigate = useNavigate()
  const [Credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  })

  const onchangeHandler = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value })
  }

  const handleLogin = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:8080/users/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: Credentials.name,
        email: Credentials.email,
        password: Credentials.password
      }),
    })
    const jsonData = await response.json()
    if(jsonData.msg){
      alert(jsonData.msg)
    } else {
      localStorage.setItem('authTokenNetclix', jsonData.authToken)
      navigate('/')
    }
  }

  return (
    <>
      <div className="container">
        <div className="maincontainer">
          <h1>Login</h1>
          <br />
          <br />
          <span class="subtitle">USERNAME:</span>
          <br />
          <input type="text" name="username" value={Credentials.username} onChange={onchangeHandler}/>
          <br />
          <span class="subtitle">EMAIL:</span>
          <br />
          <input type="email" name="email" value={Credentials.email} onChange={onchangeHandler} />
          <br />
          <span class="subtitle">PASSWORD:</span>
          <br />
          <input type="password" name="password" value={Credentials.password} onChange={onchangeHandler} />
          <br />
          <br />
          <button className="submit-btn" onClick={handleLogin}>
            SUBMIT
          </button>
          <p>
            Create an account? <Link to="/signup">sign up</Link>
          </p>
        </div>
      </div>
    </>
  )
}
