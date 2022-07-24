import { NavLink } from 'react-router-dom'
import styles from './tab.module.scss'
import { cx } from 'styles'

const Tab = () => {
  return (
    <nav className={styles.tapWrap}>
      <ul>
        <li>
          <NavLink to='' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            검색
          </NavLink>
        </li>
        <li>
          <NavLink to='favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            즐겨찾기
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Tab
