import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'

import { Navbar } from './components/navbar/Navbar'

export const App = () => {
  return (
    <Provider store={store}>
      <div >
        <Navbar />
      </div>
    </Provider>
  )
}
