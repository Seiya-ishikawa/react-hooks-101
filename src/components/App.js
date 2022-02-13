import React,{ useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';
import operationLogs from '../reducers/operationLogs';

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const string = JSON.stringify(state)
    console.log(string)
    localStorage.setItem(APP_KEY,string)
  },[state])

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
