import './App.css';
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <h1>Welcome {props.user}</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    "contactData": state.contacts,
    "pic": state.profile.avatar,
    "user": state.profile.displayName
  }
}

function mapDispatchToProps(dispatch) {
  
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
