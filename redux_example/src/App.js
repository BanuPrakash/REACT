
import './App.css';
import { connect } from 'react-redux';
import ContactView from './ContactView';
import { useRef } from 'react';

function App(props) {
  let nameRef = useRef();
  let emailRef = useRef();

  function handleClick() {
    let contact = {
      email: emailRef.current.value,
      name: nameRef.current.value
    }
    props.addNewContact(contact);
    emailRef.current.value = "";
    nameRef.current.value = "";

    emailRef.current.focus();
  }
  return (
    <div className="App">
      Email: <input type="email" ref={emailRef} /> <br />
      Name: <input type='text' ref={nameRef} /> <br />
      <button onClick={() => handleClick()}>Add Contact</button>
      <button onClick={() => props.clearContacts()}>CLEAR CONTACTS</button>
      {
        props.contactList.map(contact => <ContactView key={contact.email}
          contact={contact}
          removeEvt={(email) => props.removeContact(email)} />)
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contactList: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewContact: contact => dispatch({ type: 'ADD_CONTACT', payload: contact }),
    removeContact: email => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clearContacts: () => dispatch({ type: 'CLEAR_CONTACTS' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
