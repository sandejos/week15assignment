import React from 'react';
import Create from './components/create/create';
import Read from './components/read/read';
import Update from './components/update/update';
import Delete from './components/delete/delete';
import './App.css';

function App(){
  return(
    <div className='header'>
      
      <div>
      <h3>CRUD APP</h3>
      </div>
      
      <div>
        <Create/>
      </div>
      
      <div>
        <Read/>
      </div>

      <div>
        <Update/>
      </div>
    </div>
  )
};

export default App;