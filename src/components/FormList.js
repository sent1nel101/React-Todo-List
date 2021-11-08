const FormList = (props) => {
    const arr = props.data
    const arr2 = props.emailData
    const listItems = arr.map((val, index) => <li key={index}>{index + 1}- Name:  {val}</li>)
    const emailItems = arr2.map((val, index) => <li key={index}>{index + 1}- Email: {val}</li>)
    return <div>
    <ul>{listItems}</ul>
    <ul>{emailItems}</ul>
    </div>
}

export default FormList