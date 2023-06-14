import React, { useState } from 'react'
import './signup.css'

const Signupscratch = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const[visible,setVisible]=useState(false);
  const login = (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Please enter email")
    }
    else if(userName===""){
      setError("Please enter username")
    }
    else if (password === "") {
      setError("Please enter your password")
    }
    else {
      handleSubmit();
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="form">
            <div className="card">
              <h5 className='form__title'>Create an account for free</h5>
              <p className='form__text'><small>Free forever. No payment needed.</small></p>
              <p className='text__error'>{error}</p>
              <form type="submit" onSubmit={login}>
                <div className="form-group">
                  <label className='label'>Your Email <span className='text__span'>*</span></label>
                  <input className='input'
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                  <label className='label'>Create User Name<span className='text__span'>*</span></label>
                  <input className='input'
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                  <label className='label'>Password<span className='text__span'>*</span></label>
                  <input className='input'
                    type={visible? "text" : "password"}
                    placeholder="**********"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }} />
                    <div>
                      
                    </div>
                </div>

                <input type="checkbox" className='checkbox' />
                <span className='form__text'>By creating account you are aggreing to our Terms and Conditions.</span>

                <button className="button"
                  type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="container__image">
            <img className='image' src="https://img.freepik.com/free-photo/security-sign-log-up-password-secret-concept_53876-133565.jpg?size=626&ext=jpg" alt="signup image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Signupscratch