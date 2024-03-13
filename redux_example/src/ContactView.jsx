export default function ContactView(props) {
    let {name, email} = props.contact;
    return <div>
        {name}, {email}
        <button onClick={() => props.removeEvt(email)}>Delete</button>

    </div>
}