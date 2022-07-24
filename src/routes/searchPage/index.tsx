import { useEffect, useRef, useState, ChangeEventHandler } from 'react'
import { useInfiniteQuery } from 'react-query'

import SearchForm from 'components/searchForm'
import MovieCard from 'components/movieCard'
import Loder from 'components/loder'
import { getMovieListApi } from 'services/movie'
import styles from './searchPage.module.scss'

const SearchPage = () => {
  const [keyword, setKeyword] = useState('')
  const handleKeyword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.currentTarget.value)
  }
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    'getMovies',
    ({ pageParam = 1 }) => getMovieListApi({ s: 'dream', page: pageParam }),
    {
      refetchOnWindowFocus: false,

      getNextPageParam: (lastPage, pages) => {
        const maxPage = Number(lastPage.data.totalResults) / 10
        const nextPage = pages.length + 1
        return nextPage <= maxPage ? nextPage : undefined
      },
    }
  )

  const ITSME = useRef<HTMLDivElement | null>(null)
  const onIntersect = ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (!isFetching && entry.isIntersecting) {
      observer.unobserve(entry.target)
      fetchNextPage()

      observer.observe(entry.target)
    }
  }
  useEffect(() => {
    let observer: IntersectionObserver

    if (ITSME.current) {
      observer = new IntersectionObserver(onIntersect)
      observer.observe(ITSME.current)
    }
    return () => observer && observer.disconnect()
  })

  // 검색하기 전
  if (!data) return <div>안녕하세요</div>
  return (
    <>
      <div className={styles.formWrap}>
        <SearchForm onChange={handleKeyword} value={keyword} />
      </div>
      <ul className={styles.cardList}>
        {data?.pages.map((item) =>
          item.data.Search.map((item2) => {
            return (
              <li key={item2.imdbID}>
                <MovieCard movie={item2} />
              </li>
            )
          })
        )}
        <Loder ref={ITSME} />
      </ul>
    </>
  )
}

export default SearchPage
