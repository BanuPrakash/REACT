import { connect } from 'react-redux';
import './App.css';
import ContactView from './ContactView';
import { useState } from 'react';

function App(props) {
  let [email, setEmail] = useState();
  let [name, setName] = useState();

  function doSubmit() {
    props.addContact({
      email,
      name
    });
  }
  return (
    <div className="App">
      <div>{props.profile_pic}</div>
      <button onClick={() => props.clearContacts()}>Clear All</button>
      <form>
        Email : <input type='email' onChange={(evt) => setEmail(evt.target.value)} /> <br />
        Name : <input type="text" onChange={(evt) => setName(evt.target.value)} /> <br />
        <button type='button' onClick={() => doSubmit()}>Add Contact</button>
      </form>
      {
        props.friends.map(contact => <ContactView key={contact.email} contact={contact} delContact={(email) => props.removeContact(email)} />)
      }
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function mapStateToProps(state) {
  return {
    profile_pic: state.user.pic,
    friends: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearContacts: () => dispatch({ type: "CLEAR_CONTACT" }),
    addContact: (contact) => dispatch({ type: "ADD_CONTACT", payload: contact }),
    removeContact: (email) => dispatch({ type: 'REMOVE_CONTACT', payload: email })
  }
}

