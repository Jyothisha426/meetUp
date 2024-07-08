import {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactContext from '../../context/ReactContext'

import {
  MeetUpContainer,
  Heading,
  RegisterBtn,
  Paragraph,
  RegisterImage,
} from './styledComponents'

class MeetUp extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {name, topic, isRegistered} = value
          console.log(isRegistered)

          return (
            <MeetUpContainer>
              {isRegistered ? (
                <>
                  <Heading name={false}>Hello {name} </Heading>
                  <Paragraph topic={false}>Welcome to {topic} </Paragraph>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              ) : (
                <>
                  <Heading>Welcome to Meetup</Heading>
                  <Paragraph>Please register for the topic</Paragraph>
                  <Link to="/register">
                    <RegisterBtn>Register</RegisterBtn>
                  </Link>

                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              )}
            </MeetUpContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default MeetUp
