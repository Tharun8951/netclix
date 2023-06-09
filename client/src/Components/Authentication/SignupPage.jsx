import React , {useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignupPage() {
  const navigate = useNavigate()
  const [Credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  })

  const onchangeHandler = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value })
  }
  const handleSignup = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:8080/users/createuser', {
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
    if(jsonData.msg === 'success'){
      console.log(jsonData.authToken)
      localStorage.setItem('authTokenNetclix', jsonData.authToken)
      navigate('/')
    }
  }
  return (
    <>
      <div className="container">
        <div className="maincontainer">
          <h1>Sign up</h1>
          <br />
          <br />
          <span class="subtitle">USERNAME:</span>
          <br />
          <input type="text" name="username"  value={Credentials.username} onChange={onchangeHandler} />
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
          <button className="submit-btn" onClick={handleSignup}>
            SUBMIT
          </button>
          <p>
            Already an user? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  )
}
