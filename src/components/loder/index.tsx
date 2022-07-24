import { forwardRef } from 'react'
import styles from './loder.module.scss'

const Loder = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className={styles.loderWrap}>
      <div className={styles.loder}>🌕 🌖🌗🌘🌑🌒🌓🌔 🌕</div>
    </div>
  )
})

Loder.displayName = 'Loder'
export default Loder
