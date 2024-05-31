import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegistered} = value
        return (
          <>
            <Header />
            <div>
              {isRegistered === true ? (
                <div className="home-bg-container">
                  <h1 className="home-heading">Hello {name}</h1>
                  <p className="home-para">Welcome to {topic}</p>
                  <div className="home-img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                      className="home-img"
                    />
                  </div>
                </div>
              ) : (
                <div className="home-bg-container">
                  <h1 className="home-heading">Welcome to Meetup</h1>
                  <p className="home-para">Please register for the topic</p>
                  <Link to="/register">
                    <button
                      type="button"
                      onClick={onRegister}
                      className="register-btn"
                    >
                      Register
                    </button>
                  </Link>
                  <div className="home-img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                      className="home-img"
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
