import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCompnent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import PropsClassComponent from './components/PropsClassComponent';
import PropsFunctionalComponents from './components/PropsFunctionalComponents';
import LifeCycleClassComponent from './components/LifeCycleClassComponent';

function App() {
  return (
    <div className="App">
    <ClassCompnent/>
    <FunctionalComponent/>
    <PropsClassComponent city='vizag' type='Class'/>
    <PropsFunctionalComponents city='hyderabad' type='Function'/>
    <LifeCycleClassComponent/>
    </div>
  );
}

export default App;
