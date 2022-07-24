import styles from './searchForm.module.scss'
import { cx } from 'styles'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}
const SearchForm = ({ onChange, value }: Props) => {
  const [searchTxt, setSearchText] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    console.log(e.currentTarget)
  }
  // console.log(onChange)
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.currentTarget.value)
  }
  return (
    <form className={styles.formBox} onSubmit={handleSubmit}>
      <input type='text' onChange={onChange} value={value} />
      <button type='button'>검색</button>
    </form>
  )
}

export default SearchForm
