const FormList = (props) => {
    const arr = props.data
    const listItems = arr.map((val, index) => <li key={index}>Contact {index + 1}:  {val}</li>)
    return <ul>{listItems}</ul>
    
}

export default FormList