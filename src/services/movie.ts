import { axios } from 'hooks/worker'
import { IMovieAPIRes } from 'types/movie'

// const BASE_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=eb9a1cac&s=deam&page=4"
const BASE_URL = 'https://www.omdbapi.com/'

interface Params {
  s: string
  page: number
}

export const getMovieListApi = (params: Params) =>
  axios.get<IMovieAPIRes>(`${BASE_URL}?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`, {
    params: {
      ...params,
    },
  })
