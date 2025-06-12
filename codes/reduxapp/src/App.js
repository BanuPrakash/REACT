import { useRef } from 'react';
import './App.css';
import {connect} from 'react-redux'
import ContactView from './ContactView';

function App(props) {
  let emailRef = useRef();
  let nameRef = useRef();
  function addNewContact() {
    let contact ={
      email: emailRef.current.value,
      name: nameRef.current.value
    }
    props.addContact(contact);
  }
  return (
    <div className="App">
      <h1>Welcome {props.user}</h1>
      <form>
        Email <input type='email' ref={emailRef}/> <br />
        Name <input type='text' ref={nameRef}/> <br />
        <button type='button' onClick={addNewContact}>Add Contact</button>
      </form>
      {
        props.friends.map(contact => <ContactView 
          remove={props.removeContact}
          contact={contact} key={contact.email}/>)
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    "friends": state.contacts,
    "pic": state.profile.avatar,
    "user": state.profile.displayName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: contact => dispatch({type:'ADD_CONTACT', payload: contact}),
    removeContact: email => dispatch({type:'REMOVE_CONTACT', payload:email})
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
