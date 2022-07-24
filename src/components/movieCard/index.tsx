import { FavIcon } from 'assets/svgs'
import { ReactEventHandler } from 'react'
import styles from './movieCard.module.scss'
import img from 'assets/notfound.png'
import { cx } from 'styles'

interface Imovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface Props {
  movie: Imovie
}
const MovieCard = ({ movie }: Props) => {
  const { Title, Year, imdbID, Type, Poster } = movie

  const handleImgError: ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = img
  }
  return (
    <button className={styles.cradWrap} type='button'>
      <div className={styles.infoWrap}>
        <div className={styles.imgWrap}>
          <img src={Poster} alt='post' onError={handleImgError} />
        </div>
        <dl className={styles.descWrap}>
          <dt>{Title}</dt>
          <dd>{Type}</dd>
          <dd>{Year}</dd>
        </dl>
      </div>
      <FavIcon />
      {/* <FavIcon className={cx({ [styles.isLike]: isLike })} /> */}
    </button>
  )
}

export default MovieCard
