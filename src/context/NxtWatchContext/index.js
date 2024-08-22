import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  activeTab: 'Home',
  changeTab: () => {},
  addVideo: () => {},
})

export default NxtWatchContext
