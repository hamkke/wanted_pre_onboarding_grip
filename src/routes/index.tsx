import { DragEvent, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getMovieListApi } from 'services/movie'

import Layout from 'components/layout'
import SearchPage from './searchPage'
import FavoritesPage from './favoritePage'

import { IMovieList } from 'types/movie'

const NO_RESULT = '검색 결과가 없습니다.'
const TOO_MANY_RESULT = '검색 결과가 많습니다.'
const NET_ERROR = '현재 검색이 불가능합니다.'

const App = () => {
  const [movieList, setMovieList] = useState<IMovieList[]>()
  const [errorMessage, setErrorMessage] = useState<string>(NO_RESULT)
  const handleDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log(e)
    // e.dataTransfer.dropEffect = 'move'
    // setGrab(undefined)
  }
  // useEffect(() => {
  //   getMovieListApi({ s: 'dream', page: 1 })
  //     .then((res) => res.data)
  //     .then((data) => {
  //       if (data.Response === 'False') {
  //         if (data.Error === 'Too many results.') {
  //           setErrorMessage(TOO_MANY_RESULT)
  //         }

  //         // ref(null);
  //       }
  //       // qwe()
  //       console.log(data)
  //       setMovieList(data.Search)
  //     })
  // }, [])
  // console.log(movieList)

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<SearchPage />} />
        <Route path='favorites' element={<FavoritesPage />} />
      </Route>
      {/* <div>{movieList}</div> */}
    </Routes>
  )
}

export default App
