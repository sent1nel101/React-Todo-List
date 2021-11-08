
import React from 'react'

const FormList = (props) => {
    const arr = props.data
    const listItems = arr.map((val, index) => <li key={index}>Name: {val}</li>)
    return <ul>{listItems}</ul>
    
}

export default FormList