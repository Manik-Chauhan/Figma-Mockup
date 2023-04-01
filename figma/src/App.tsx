import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import Something from './components/Something';

function App() {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    {/* <Something/> */}
    </div>
  );
}

export default App;