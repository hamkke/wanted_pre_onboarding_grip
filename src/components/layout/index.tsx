import { Outlet } from 'react-router-dom'
import { FavIcon } from 'assets/svgs'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <header>header</header>
      <FavIcon />
      <main>
        <Outlet />
      </main>
      <div>hello</div>
    </div>
  )
}

export default Layout
