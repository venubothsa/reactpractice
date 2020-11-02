import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCompnent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import PropsClassComponent from './components/PropsClassComponent';
import PropsFunctionalComponents from './components/PropsFunctionalComponents';
import LifeCycleClassComponent from './components/LifeCycleClassComponent';
import ParentComponent from './components/ParentComponent';
import StateFunctionalComponent from './components/StateFunctionComponent';
import StateClassComponent from './components/StateClassComponent';
import FormComponent from './components/FormComponent';
import JSX from './components/JSX';

function App() {
  return (
    <div className="App">
    <ClassCompnent/>
    <FunctionalComponent/>
    <LifeCycleClassComponent/>
    <JSX/>
    {/* <PropsClassComponent city='vizag' type='Class'/>
    <PropsFunctionalComponents city='hyderabad' type='Function'/>
    <StateFunctionalComponent/>
    <StateClassComponent/>
    <LifeCycleClassComponent/>
    <ParentComponent/>
    <FormComponent/> */}
    </div>
  );
}

export default App;
