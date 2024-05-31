import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmitRegistration = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      return (
        <>
          <Header />
          <div className="register-bg-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="register-img"
              />

              <form
                className="register-form-container"
                onSubmit={onSubmitRegistration}
              >
                <h1 className="register-heading">Let us join</h1>
                <div className="register-input-container">
                  <div className="register-input-section">
                    <label className="label" htmlFor="name">
                      NAME
                    </label>
                    <input
                      id="name"
                      value={name}
                      type="text"
                      onChange={onChangeName}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="register-input-section">
                    <label className="label" htmlFor="topic">
                      Topics
                    </label>
                    <select value={topic} id="topic" onChange={onChangeTopic}>
                      {topicsList.map(eachTopic => (
                        <option value={eachTopic.id} key={eachTopic.id}>
                          {eachTopic.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="register-submit-btn">
                    Register Now
                  </button>
                </div>
                <div>
                  {showError === true ? (
                    <p className="register-showError">Please enter your name</p>
                  ) : (
                    ''
                  )}
                </div>
              </form>
            </div>
          </div>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
