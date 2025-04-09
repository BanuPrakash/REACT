import { connect } from 'react-redux';
import './App.css';
import { useRef } from 'react';
import ContactView from './ContactView';
function App(props) {
  let nameRef = useRef();
  let emailRef = useRef();
  function addContact() {
    let contact = {
      name: nameRef.current.value,
      email: emailRef.current.value
    }
    props.add(contact)
  }
  return (
    <div className="App">
      Profile Picture : {props.pic} <br />
      <button type="button" onClick={() => props.clear()}> Clear Contacts</button>
      {
        props.contactList.map(contact => <ContactView 
            key={contact.email} 
            contact={contact}
            delEvt={props.remove}
            />)
      }
      <form>
        Name <input type='text' ref={nameRef}/> <br />
        Email <input type="email" ref={emailRef} /> <br />
        <button type='button' onClick={() => addContact()}>Add Contact</button>
      </form>
    </div>
  );
}

// state is from redux store
function mapStateToProps(state) {
  return {
    pic: state.profile.avatar,
    contactList: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: contact => dispatch({type:'CREATE_CONTACT', payload: contact}),
    remove: email => dispatch({type:'REMOVE_CONTACT', payload: email}),
    clear: () => dispatch({type:'CLEAR_CONTACTS'})
  }
}
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App);
