import Header from '../Header'
import NavigationBar from '../NavigationBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const bgColor = isDark ? '#181818' : '#f9f9f9'
      const headingColor = isDark ? '#f1f5f9' : '#1e293b'
      const noteColor = isDark ? '#e2e8f0' : '#475569'

      const notFoundImageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFoundImageUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found.
              </NotFoundVideosNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
