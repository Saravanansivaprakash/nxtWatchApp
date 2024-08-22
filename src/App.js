import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NxtWatchContext from './context/NxtWatchContext'
import Login from './components/Login'
import ProtectorRoute from './components/ProtectorRoute'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'Home', savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDark, activeTab, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          activeTab,
          savedVideos,
          changeTheme: this.changeTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectorRoute exact path="/" component={Home} />
          <ProtectorRoute exact path="/trending" component={Trending} />
          <ProtectorRoute exact path="/gaming" component={Gaming} />
          <ProtectorRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectorRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectorRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
