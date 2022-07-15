import { DragEvent, useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import Layout from 'components/layout'
import SearchPage from './searchPage'
import FavoritesPage from './favoritePage'

const App = () => {
  const handleDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log(e)
    // e.dataTransfer.dropEffect = 'move'
    // setGrab(undefined)
  }
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<SearchPage />} />
        <Route path='favorites' element={<FavoritesPage />} />
      </Route>
    </Routes>
  )
}

export default App
