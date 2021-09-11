import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDataRequest } from './components/Table/actions';
import { Table } from './components/Table';

import './App.css';



function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getDataRequest());
  })

  return (
    <div className="App">
      <header className="App-header">
      <Table></Table>
      </header>
    </div>
  );
}

export default App;
