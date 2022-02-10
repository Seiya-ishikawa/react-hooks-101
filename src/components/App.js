import React,{ useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';
import operationLogs from '../reducers/operationLogs';

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
      <OperationLogs/>
      </div>
    </AppContext.Provider>
  )
}


export default App;
