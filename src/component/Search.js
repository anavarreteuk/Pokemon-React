import React from 'react'

const Search = (props) => {
return(
    <div>
        <input onChange={event => props.updateFilter(event.target.value)}></input>
    </div>
)
}

export default Search