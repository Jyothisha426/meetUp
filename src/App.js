import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import ReactContext from './context/ReactContext'
import MeetUp from './components/MeetUp'
import Register from './components/Register'
import Header from './components/Header'
import NotFound from './components/NotFound'

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
// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].displayText,
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = t => {
    const topicObject = topicsList.find(each => each.id === t)
    const topicValue = topicObject
      ? topicObject.displayText
      : 'Arts and Culture'
    // console.log(topicObject)
    this.setState({topic: topicValue})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state
    // console.log(name)
    // console.log(topic)
    // console.log(isRegistered)
    return (
      <ReactContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          registerName: this.registerName,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          updateError: this.updateError,
        }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={MeetUp} />
          <Route exact path="/register" component={Register} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="bad-path" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}
export default App
