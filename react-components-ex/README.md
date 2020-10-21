# React Components

   Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

Components are two types:

  - Functional Components
  - Class components
  
## Functional Components

  Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword. Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.

     function Democomponent() {
       return <h1>Welcome Message!</h1>;
    }

## Class Components
 The class components are little more complex than the functional components. The functional components are not aware of the other components in your program whereas the class components can work with each other. We can pass data from one class component to other class components. We can use javascript ES6 classes to create class-based components in React.
 
 To define a React component class, you need to extend `React.Component`.

    class ClassComponent extends React.Component{
           render(){
              return <h1>I'm from class Component!</h1>
           }
         }


#### Life cycle methods

****constructor() :****  Initializer for declaring variables or states.

****componentDidMount() :**** Called after the component is rendered. The initial request for data may be called in this method instead of constructor().

****render() :**** REQUIRED method that outputs HTML to the DOM.

****componentDidUpdate() :****  Called after the component is updated in the DOM.

****componentWillUnmount() :****  Called when the component is about to be removed from the DOM.

## Functional components vs Class components

![alt text](https://github.com/venubothsa/reactpractice/blob/main/react-components-ex/image.png?raw=true)

## Props vs State
