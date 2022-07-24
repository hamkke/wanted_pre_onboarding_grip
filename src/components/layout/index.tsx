import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

import Tab from 'components/tab'

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <main className={styles.mainWrap}>
        <Outlet />
      </main>
      <Tab />
    </div>
  )
}

export default Layout
