import { useNavigate } from "react-router-dom"

import { useState } from "react"

const SearchForm = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const hendleSubmit = (e) => {
        e.preventDefault()
        navigate('/search?q=' + query)
    }

  return (
    <form  onSubmit={hendleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm