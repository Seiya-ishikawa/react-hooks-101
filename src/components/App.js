import React,{ useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state, 'in App.js');

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fruid">
      <EventForm/>
      <Events/>
      </div>
    </AppContext.Provider>
  )
}


export default App;
