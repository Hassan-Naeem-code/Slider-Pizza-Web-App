import React from 'react';
import { Button } from 'reactstrap';
import Index from './pages/index';
import './App.css';

const App = () =>{
  return(
    <React.Fragment>
     <div className='container-fluid p-l-r-0'>
        <Index />
     </div>
    </React.Fragment>
  )
}

export default App;
