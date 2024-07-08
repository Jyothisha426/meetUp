import ReactContext from '../../context/ReactContext'
import {
  RegisterContainer,
  RegisterSub,
  Heading,
  Label,
  Input,
  RegisterBtn,
  RegisterImage,
  Select,
  LabelInputContainer,
  ErrorText,
} from './styledComponents'

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
  <ReactContext.Consumer>
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

      const onSubmitList = event => {
        event.preventDefault()
        console.log('Submitted')
        const {history} = props
        if (name !== '' && topic !== '') {
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = e => {
        changeName(e.target.value)
      }

      const onChangeTopic = e => {
        changeTopic(e.target.value)
      }

      const topicId = topicsList.find(e => e.displayText === topic).id

      return (
        <RegisterContainer>
          <RegisterImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <RegisterSub onSubmit={onSubmitList}>
            <Heading>Let us join</Heading>
            <LabelInputContainer>
              <Label htmlFor="name">NAME</Label>
              <Input id="name" onChange={onChangeName} value={name} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="name">TOPICS</Label>
              <Select onChange={onChangeTopic} value={topicId}>
                {topicsList.map(eachTopic => (
                  <option value={eachTopic.id} key={eachTopic.id}>
                    {eachTopic.displayText}
                  </option>
                ))}
              </Select>
            </LabelInputContainer>
            <RegisterBtn type="submit">Register Now</RegisterBtn>
            {showError ? <ErrorText>Please enter your name</ErrorText> : ''}
          </RegisterSub>
        </RegisterContainer>
      )
    }}
  </ReactContext.Consumer>
)

export default Register
