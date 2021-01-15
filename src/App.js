import React from 'react'
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Display from './Components/Display';
import Fetch from './Components/Fetch';
import Form from './Components/Form';
import UserData from './Components/UserData';
import Navabar from './Navabar';
import store from './Redux/store/store';
function App() {
  return (
      <Provider store={store}>
      {/* <Router>
        <Navabar/>
        <Route path='/' exact component={Form}/>

      </Router> */}
      <Fetch/>
      <UserData/>
      <Display/>
      </Provider>

)
}

export default App
