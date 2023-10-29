import React from 'react'

// eslint-disable-next-line no-unused-vars
export default function Search(props) {
  // STRETCH - What prop do we need to be able to change the value of
  // the search term (which is state that lives in the top-level component)?
  // eslint-disable-next-line no-unused-vars
  const changeHandler = event => {
    // STRETCH - On 'change' of the input we should set a new search term in app state
    props.setSearchTerm(event.target.value);
  }

  return (
    <div className='search-friends container'>
      <input onChange={changeHandler} />
    </div>
  )
}
