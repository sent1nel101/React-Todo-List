const Form = (props) => {
    
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <h2>Enter Contact Info</h2>
                <input type="text" value={props.text} onChange={props.onChange} />
                <button type="submit">Save Contact</button>
            </form>
        </div>
    )
}

export default Form
