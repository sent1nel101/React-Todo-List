const Form = (props) => {

    
return (
    <div>
        <form onSubmit={props.onSubmit}>
            <h2>Enter New Contact Info</h2>
            <input type="text" valueText={props.text} onChange={props.onTextChange} />
            <input type="email" valueEmail={props.email} onChange={props.onEmailChange} />
            <button onClick={props.onClick} type="submit">Save Contact</button>
        </form>
    </div>
)
}

export default Form
