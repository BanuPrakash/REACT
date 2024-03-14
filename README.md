# REACT
Banu Prakash C

Full Stack Architect, Co-founder Lucida Technologies Pvt Ltd., and Corporate Trainer.

Emails: 
banu@lucidatechnologies.com; 
banuprakashc@yahoo.co.in; 
banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required:

Visual Studio Code, 

Chrome Web Browser, 

NodeJS Latest LTS [version 20]
$ node --version
v20.11.1

=============================

Client side Web application development using React.

Rendering: data --> Presentation

Server Side Rendering
* PHP
* Servlet 
* ASP / ASP.NET
* ExpressJS
* many more templates

Pros: SEO, thin clients
Cons: Different clients is not possible


Client Side Rendering
data to representation [ JSON / XML / ATOM / CSV ]
applications to convert JSON --> View

1) DOM --> Document Object Model 
--> create elements, remove elements and travrse thro elements
document.createElement("table");
document.createTextNode("Hello World");
document.querySelectorAll("p");

2) jQuery --> View library, which simplified DOM handling and making API calls to server
$("p"); --> same as document.getElementByTagName("p");
$("<p/>") ==> same as document.createElement("p");

---
Single Page Application [ SPA ]
having single html [index.html] but different views for different URLs

http://server.com/products

http://server.com/products/mobiles
http://server.com/products/tvs
http://server.com/products/mobiles/iPhone
http://server.com/orders

3)  Templates
1) jQuery Template
2) Underscore
3) Knockout
4) Handlebar
5) Mustache
6) PUG
7) JADE
....
{{}} --> interpolation

products.tmpl is a template
<h1>{{firstname}} {{lastname}}</h1>

instead of:
var h1 = document.createElement("h1");
var t1  = document.createTextNode(firstName);
var t2  = document.createTextNode(lastName);
h1.appendChild(t1);
h1.appendChild(t1);


orders.tmpl is a template

4) Libraries and Frameworks
a) Backbone was a library which provided Model and Controller support [MVC architectural pattern]
M -> Model
V -> View
C -> Controller [ user interaction]

for Views we could use any of above templates

b) AngularJS --> MVC Framework
c) React --> View Library 
d) Angular
e) Vue .////

======================

Where does NodeJS and NPM fit?

NodeJS is a platform  built on V8 Javascript engine.
can be used for building
1) Server Side applications using ExpressJS [ API endpoints ], similar to Spring Boot / PHP / Go Lang /,,,
2) Server Side rendered application [ sending to presentation pages]
3) use it for streaming [ for platforms like Netflix / HotStar/ Amazon]
4) Realtime application [ ChatBot]
5) Building client side applications

Challenges in building client side applications:
1) Developers might choose to  write code in various languages
    a) Latest version of JS
    b) TypeScript
    c) DART
    d) CoffeeScript
    e) LiveScript

Why choose them:

(x, y) -> x + y;

is same as:
function (x,y ) {
    return x + y;
}

typescript:
function add(x: number, y: number) : number {
    return x + y;
}

add(4,5);
add("a", "b"); // compiler error

 Target is ECMAScript 5

a) I have used ES2020 version of JavaScript
need to use Transpilers like Babel / Tracuer 
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. 

babel file.js [ ES 2020] ---> file.js [ES 5]

b) I have written code in TypeScript
tsc file.ts ---> file.js

----

NodeJS can be used
1) compile / transpile
2) testing --> Unit testing, E2E testing
3) Lint --> Static code analysis
4) Minify and Uglify [ to reduce file size]
function addProductToCart(item) {

}
to
function _a(i){}

5) Bundling
50+ javascript files --> to one bundle.js

without bundling
<script src="customers.js"></script>
<script src="products.js"></script>
<script src="orders.js"></script>
<script src="payment.js"></script>

Problem:
Ordering of script inclusion is very important
Each Script tag leads to 1 network call

instead
<script src="bundle.js"></script>

-------------------------

Why NPM? [ Node Package Manager]
* download dependencies
* publish modules
* run scripts [test , start, lint, ...]

Alternate to NPM --> YARN / PNPM / RUSH/ ....

Java --> Maven and Gradle are similar to NPM
Python --> PIP

===============

Developing REACT application using webpack

JavaScript build tools --> automation
* Grunt
Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.
* Gulp
* Webpack
* Vite

=======
Steps:

webpack_react> npm init --y

creates a file "package.json", where all dependencies installed are listed and scripts can be placed
For Java --> pom.xml


webpack_react> npm i @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader html-webpack-plugin webpack webpack-cli -D


downloads depenencies and transitive dependencies into "node_modules" folder

-D specifies that the modules are not required in production

```
 "devDependencies": {
    "@babel/core": "^7.24.0", [done]
    "@babel/preset-env": "^7.24.0", [done]
    "@babel/preset-react": "^7.23.3",
    "babel-loader": "^9.1.3", [done]
    "css-loader": "^6.10.0",
    "html-webpack-plugin": "^5.6.0",
    "style-loader": "^3.3.4",
    "webpack": "^5.90.3", [done]
    "webpack-cli": "^5.1.4" [done]
  }
```

My team members will download the "webpack__react" project with code minus "node_modules" folder
and execute:
webpack_react> npm install

"@babel/core": "7.24.0", ==> exact version
"@babel/core": "^7.24.0", ==> minimun is 7.24.0, if latest is available download
"@babel/core": "~7.24.0", ==> major version has to be "7", minor and patch can be latest
7.30.1 is allowed

===========

@babel/core @babel/preset-env @babel/preset-react babel-loader

babel-loader understands ESM ==> ES6 module system
JS module system:
1) CommonJS module system ==> default understaood by NodeJS
```
lib.js
function add() {}
function subtract() {}
function doTask() {} // private to lib.js
module.exports = {
    add,
    subtract
}

other.js
const {add, subtract} = require('./lib');

``

2) ESM
```
export function add() {}
export function subtract() {}
function doTask() {} // private to lib.js

other.js
import {add,subtract} from './lib'

babel-loader loads './lib' into memory and gives to '@babel/core' --> transcompiler
to covert the code so that it is compatable to target platform

import './logo.svg'; // --> file-loader

import './styles.css'; // --> css-loader --> next course of action is 'style-loader'

'@babel/core' --> transcompiler

tries to covert to lower version
it can take care of syntax changes by itself
https://caniuse.com/
 
return new Promise(...); // ES 6 feature

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

Polyfill-->https://www.npmjs.com/package/core-js

import 'core-js/actual';

Promise.resolve(42).then(it => console.log(it)); // => 42

``
https://createapp.dev/webpack

Core Configuration files has to be CommonJS module system

webpack_react % npm run dev
asset bundle.js 5.28 KiB [emitted] (name: main)

webpack_react % npm run prod
asset bundle.js 696 bytes [emitted] [minimized] (name: main)

===========================

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
Also if you have many bundles  

<script src="../dist/bundle.js"></script>

====
In Production use : Apache, IIS, NginX, Webpsphere , ...

npm i webpack-dev-server -D

https://webpack.js.org/configuration/devtool/

npm start

npm i clean-webpack-plugin -D

npm i webpack-bundle-analyzer -D

===========


React Demystify:

React nodes are not real DOM nodes themselves, but a representation of a potential DOM node

Virtual DOM --> DOM

React Node can be a ReactElement, ReactFragment, a string, a number, array of React nodes, null, boolean or undefined

JSX.Element is a ReactElement.

JavaScript and XML

'@babel/preset-react' helps to convert JSX into JavaScript

JSX code --> '@babel/preset-react' [uses object called React] --> JS

props ==> attributes to tag and children
for example:
<img src="a.png"/>
src is props

React.createElement creates a VDOM {JS representation DOM}

React.createElement is core API of React library 

Next step is rendering
JS object to View Component

========


render() will be different for Web / Mobile / Tv / Desktop  application

https://github.com/chentsulin/awesome-react-renderer

====================================================

Create React App
Create React App  is the best way to start building a new single-page application in React.
npx -==> executable node module
npm i create-react-app -g
create-react-app sampleapp

Prefer:
npx create-react-app sampleapp

* creates scaffolding code with "babel","html-webpack-plugin", "css-loader,style-loader", "webpack",...
"webpack-dev-server --> running on 3000 port"
includes all required dependencies 
includes React library [React.createElement]
includes React-dom library [render()]

Can't see webpack.config.js and babel.config.js [ hidden]

  "start": "react-scripts start",
   is same as
   "start": "webpack serve --mode development"

 "build": "react-scripts build", 
 is same as
 "build": "webpack --mode development"

"react-scripts" is a wrapper for "webpack" commands

==============

Create Components in React:
1) React.createElement
2) Functional Component
function Book() {
    return <div>
        <h1>React Desitmfy</h1>
        </div>
}

3) Class Component

class Book extends Component {
    render() {
     return <div>
        <h1>React Desitmfy</h1>
        </div>
    }
}

===========

Thinking in React:
Atom --> Text, Button, Image
Molecule --> Card Component [ collection of atoms]
Organisms --> collection of molecules [ card list]
Template --> collection of organisms
Page --> association of different types of templates

-------------------

App
Filter [Molecule] rfc
UserList [Organsims] rcc
User [Molecule] rfc

---
Class Component can have state and behaviour

props --> mechanism using which parent component can pass data to child

index.js --> App.js --> UserList.jsx --->* User.jsx

Whenever state or props change component re-renders

====

Application
* Context as state management
* use Redux / RTK
* use Mobx

reconcillation --> execute Diffs algorthim and re-render the component
https://legacy.reactjs.org/docs/reconciliation.html

Each child in a list should have a unique "key" prop.

As of React 16 version recommended components was:
Class Component --> State and behaviour
functional component --> pure view component

=============================================


<Menu title="Delicious Recipes">
Menu component will have state ==> recipes.txt has the data

<Recipe recipe={recipe} key={recipe.name} />

<Ingredients ingredient={ingredient} key={...}/>

<Steps />

=======

* Add Unit testing and E2E testing 
* React life cycle methods
* React Hooks
* React Context
* React-router-dom

==================

Day 2

Recap:
JS build tool --> webpack
npx create-react-app myapp [internally uses webpack]
ng new myapp [uses webpack]

webpack:
* webpack --mode development
* webpack --mode production [minify, uglify, without source map]
* webpack-dev-server
webpack serve --mode development
* html-webpack-plugin
-> automate adding scripts into template [index.html]
* babel-loader, @babel/core, @babel/preset-env, @babel/preset-react
--> Higher version of JS to lower compatable version code [@babel/preset-env]
--> to translate JSX to JS object [@babel/preset-react]
* webpack.config.js
* babel.config.js / babel.config.json / .babelrc

npx create-react-app sampleapp
creates scaffolding code internally using webpack
* index.js --> App.js
* ReactDOM for rendering web
--> react-tv / proton-native / react-native ,... other renders are also available
react-native
return <View>

</View>

https://ionicframework.com/

--------

* React.createElement() for creating ReactElement
* functional component returns JSX
* Class Component
--> extends Component
--> render() returns JSX
--> state & behaviour

always mutate state using
this.setState({
    stateVarible: new_value
})

this triggers reconcillation

Rendering
```
upto React 17 version:
ReactDOM.render(<App />, document.getElementById('root'));

this used Synchronous Stack based rendering

From React 18 version:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

this uses Fiber Architecture and Concurrency [loosely based on ForkJoinPool Algorithm]

https://claudiopro.github.io/react-fiber-vs-stack-demo/

react-dom.development.js

performUnitOfWork()

Line: 21516
function beginWork(current, workInProgress, renderLanes) {

Line: 22064
function completeWork(current, workInProgress, renderLanes) {

React Documentary:
https://www.youtube.com/watch?v=8pDqJVdNa44

```

Unit Testing:
JS has the following unit testing frameworks:
1) Jasmine
2) Mocha
3) JEST

npx create-react-app add JEST as the default unit testing framework

ng new myapp ==> Angular adds Jasmine as the default unit testing frameowrk

RTL --> react testing library is built on top of Jest
  "test": "react-scripts test",
  npm start
  npm test
  npm run build
  npm run someother

```
getByRole
getByLabelText
getByPlaceholderText
getByText

<button type="button" onClick={() => props.delEvent(id)}>Delete</button>

screen.getByRole('button');

<input type="text" 
  onChange={(evt) => props.filterEvt(evt.target.value)}  
  placeholder='Search by name' />

screen.getByPlaceholderText('Search by name');
screen.getByRole('input');

<h1> Users List </h1>

screen.getByText(/Users List/);

https://testing-library.com/docs/dom-testing-library/api-async/
```

Async:
```
import React, { useEffect, useState } from 'react';
import { render, waitFor } from '@testing-library/react';

function AsyncMessage() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hello, World!');
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <p>{message}</p>;
}

test('displays the message after a delay', async () => {
  const { getByText } = render(<AsyncMessage />);
  await waitFor(() => {
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
});
```

render(<App/>); // integration testing

Testing components in Isolation
<User key={user.id} customer={user} delEvent={(id) => this.deleteUser(id)} />)
  
===========================

Component Life Cycle Methods
```
Mounting Phase
constructor() ==> render() ==> componentDidMount()

class VideoList extends Component {
    constructor() {
        // initialization
        20 dummy title and video links 
        //create placeholder
    } 

    render() {
        render the view with inital data
        // render placeholder
    }

    componentDidMount() {
        // this is the place where API calls should be done
        // set the state with results from API call
    }
}

whenever state changes re-render happens with new state

Having the above approach improve WebVitals ==> FCP

State Changes ==> Updating Phase
state changes/newprops from parent ==> shouldComponentUpdate() --> false

state changes/newprops from parent ==> shouldComponentUpdate() --> true --> render() --> componentDidUpdate()

componentDidUpdate() plae where dependent API calls needs to be done
```

npx create-react-app trials

```
import React, { Component, PureComponent } from 'react'

export default class NameChild extends PureComponent {
//   shouldComponentUpdate(prevProps, prevState) {
//     if (this.props.name === prevProps.name) {
//         return false;
//     }
//     return true;
// }
  render() {
    console.log("<NameChild /> renders");
    return (
      <div>Name Child , Name : {this.props.name} </div>
    )
  }
}

import React, { Component } from 'react'

export default class AgeChild extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        if (this.props.age === prevProps.age) {
            return false;
        }
        return true;
    }
    render() {
        console.log("<AgeChild /> renders");
        return (
            <div>AgeChild, Age: {this.props.age} </div>
        )
    }
}

```

Functional components --> No Life Cycle Methods

Memoize is a pattern -> cache result of expensive function call

====

componentWillUnMount() will be called before the component is destroyed.
* use this to release any subscription 
* do dispay Dialog on destroy --> Do you want to really Delete?
* flush all state changes to server

================================

React 16+ recommends using only functional components instead of class components
99% of components will be functional components

class components are heavy

Class components can have state, life cycle methods and behaviour.

React Hooks was introduced in React 16.8 version which can be used for what class components provides.

1) useState
2) useEffect
3) useReducer
4) useContext [Context Consumer]
5) useCallback
6) useMemo
7) useParams

useState() is a hook to introduce state variables in functional components

```
class StateCompExample extends Component {
  state = {
    name : "Roger",
    age : 18
  }

  setName(n) {
    this.setState( {
      name: n
    })
  }

  setAge(a) {
    this.setState({
      age: a
    })
  }
}
```
===================

useReducer() is a hook which needs to used instead of useState() only if we need 
a) mutation depends on previous state
b) conditionally mutate the state

```
Example Shopping Cart:
state data:
{
  "items": [
    {id: 112, name: 'A', qty: 2, amount: 43434},
    {id: 522, name: 'X', qty: 1, amount: 6223}
  ],
  total: 98882.22
}

1) Add to Cart Action
{id: 51, name: 'G', amount: 124}

get previous state and add new item to the cart
{
  "items": [
    {id: 112, name: 'A', qty: 2, amount: 43434},
    {id: 522, name: 'X', qty: 1, amount: 6223},
    {id: 51, name: 'G', amount: 124} <---
  ],
  total: 100041.22
}

2) Increment qty of X
get previous state
{
  "items": [
    {id: 112, name: 'A', qty: 2, amount: 43434},
    {id: 522, name: 'X', qty: 2, amount: 12823}, <----
    {id: 51, name: 'G', amount: 124}
  ],
  total: 160041.22
}

3) clear cart
{
  items:[],
  total: 0.0
}

SOLID Design Principle

S --> Single Resposibility


Reducer function 
(state, action) => new state

action is an object of syntax:

{
  type:'ADD_TO_CART',
  payload:{id: 51, name: 'G', amount: 124}
}

{
  type:'INCREMENT',
  payload: 2
}

{
  type: 'CLEAR_CART'
}

```

Add new elements into array:
```
let data = [55,2,1];

let ndata = [...data, 88] // make a clone of data and push 88

ndata;
(4) [55, 2, 1, 88]
```

introduced in React 16
Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

=======================

Application using:
1) typescript instead of JavaScript
statically typed
2) Context
3) React Hooks
4) react-router-dom
--> 
for different URLs different Components are rendered
http://amazon.com/mobiles
http://amazon.com/tvs
http://amazon.com/cart

--> also lazy loading of components

5) Bootstrap --> CSS Framework
6) Fontawesome --> Icons library
7) Make API calls to Server using Axios library


Next Part:
convert above application by replacing Context with Redux [3rd party state management library]


npx create-react-app productsapp --template typescript

vite instead of create-react-app

==================

1) NavbarComp
2) ProductList
3) ProductCard
4) Details
5) CartList
6) CartComp
7) ProductForm
8) Default

====



productsapp> npm i bootstrap react-bootstrap react-router-dom axios @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

index.tsx
import 'bootstrap/dist/css/bootstrap.min.css'; 


https://react-bootstrap.netlify.app/docs/components
styled-components
Adobe react specturm

href ==> reload the application
as={Link} ==> load only desired component and not entire application

If bundle.js size is more ==> leads to FCP issue

<script src="bundle.js"></script>

Solution: lazy load components only when required

interface vs Type:
```
1) interface are extendable

interface Product {
  id: number,
  name: string,
  price : number
}

interface Mobile extends Product {
  camera: string,
  connectivty: string
}

1) type are not extendable

2) interface can be used for realization relationship

interface Renderer {
  render();
}

class ReactDOM implments Renderer {
  // code
  render() {}
}

class ReactNative implements Renderer {
  // code
  render() {}
}

```
A and B can be consumer
<ProductContex.Provider value={...}>
  <A/>
  <B />
</ProductContext.Provider>

D and E and F can be consumer
<ProductContext.Provider value={...}>
  <D/>
  <E />
  <F />
</ProductContext.Provider>

===========

Day 3

React Hooks: can be used only in functional component
1) useState() have state variables in functional component
2) useEffect() to simulate life cycle methods

```
  // componentDidMount
  useEffect(() => {

  },[]); // empty dependency

  // componentDidUpdate
  useEffect(() => {

  }); // no dependency --> code executes if any state/props change happens

  // componentDidUpdate
  useEffect(() => {

  }, [name, age]); // trigger this whenever name or age changes

// componentDidUpdate
  useEffect(() => {

  }, [price]); // trigger this when price changes



3) useReducer()
  whenever state change depends on previous state and conditionally mutate the state

  3.1)
  function CountReducer(state, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.payload
        }
      case 'DECREMENT':
        return {
          count: state.count -1
        }
      case 'RESET':
        return {
          count : 0
        }
      default : return state;
    }
  }
  let [state, dispatch] = useReducer(CountReducer, {count: 0})
  dispatch({type:'INCREMENT', payload: 10});
  //{count: 10}
  dispatch({type:'DECREMENT'});
  //{count: 9}
  ```

  Context: helps prevent props-drill
  Provider places data in context
  Consumer gets the data from Context

  let CartContext = createContext();
  let PersonContext = createContext(); // create a context

```
 function SomeClass(props) {
  return(  
    <PersonContext.Provider value={{"user": "banu@lucidatechnologies.com", "avatar": "banu.png"}}>
     {props.children}
  </PersonContext.Provider>
  )
 }

 <SomeClass className="row">
    <App />
 </SomeClass>

 ``
 chrome://extensions
 react and redux dev tools

 Class Component --> Context Consumer
```
 export default class ProductList extends Component {
  render() {
    return <ProductContext.Consumer>
      {
        value => value.products.map(....);
      }
    </ProductContext.Consumer>
  }
 }

```

<div className='container'> is same as <Container> ==> provides auto-margin 

Bootstrap uses 12 grid system

<img src="..." className="col-sm-12 col-md-6 col-lg-4">

<Link to={"/details/" + id }>
<Link to={`/details/${id}`}>


Files:
1) model/Cart.ts
2) reducers/CartReducer.ts
3) context/CartContext.tsx
4) index.tsx
5) NavbarComp.tsx
6) ProductCard.tsx
7) CartComp.tsx
8) CartList.tsx

=====

Fake RESTAPi:
Run in seperate terminal:
npx json-server --watch data.json --port 1234

in other terminal:
npm start

Changes: ProductContext.tsx to access data from http://localhost:1234/products

==========

Place Order
1) User login
in browser:
window.sessionStorage.setItem("user", "banu@gmail.com");

Check:
1) data.json
npx json-server --watch data.json --port 1234

2) ProductContext.tsx
  gets from our Fake API server
3) CartContext.tsx
checkout()

4) npm start
window.sessionStorage.setItem("user", "banu@gmail.com"); in windows terminal

============

function getProducts() {
  ...
}
// without using Provider
let ProductContext = createContext({products: getProducts()});

=========

Handling Forms in React:
1) Controlled Component
where react will hold the state of form elements
```
  export default function ProductForm() {
    let [name, setName] = useState();
    let [price, setPrice] = useState();
    function doSubmit() {
      ///
    }
    return <div>
      Name : <input type="text" onChange={(evt) => setName(evt.target.value)}/> <br />
      Price :<input type="number" onChange={(evt) => setPrice(+evt.target.value)}/> <br />
      <button type="button" onClick={() => doSubmit()}>Add </button>
    </div>
  }

```
2) Uncontrolled Component
form elements themselves hold the state
```
export default function ProductForm() {
    let nameRef = useRef();
    let priceRef = useRef();
    function doSubmit() {
      let product = {
        title: nameRef.current.value,
        price: priceRef.current.value
      }

      axios.post("http://localhost:1234/products", product).then(response => {
        console.log("Product added!!!");
        nameRef.current.value = "";
        priceRef.current.value = 0;
      })
    }
    return <div>
      Name : <input type="text" ref={nameRef}/> <br />
      Price :<input type="number" ref={priceRef}/> <br />
      <button type="button" onClick={() => doSubmit()}>Add </button>
    </div>
  }
```

Predicatable State Management using REDUX

1) React Context was not meant for State Management
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Anti-pattern: State Managment

Can be used as State Managment for Smaller application

2) Redux
3) Mobx
4) Recoil

Why Redux?
* State managment module can be developed independently and tested by team. Team need not be aware of view library like React, Angular, Backbone

* State managment module can be integrated into React / Angular / Server Side code like ExpressJS
* Time Travel debugging
* Apt choice for MicroFrontEnd Framework

Redux has a Single Store [ central source of truth], Store is place where state resides.


react-redux
```
connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

function mapStateToProps(state) {
  return {
    cartItems: state => state.cart.items,
    grandTotal: state => state.cart.total
  }
}

props.cartItems.map(...)

props.grandTotal

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch({type:"ADD_TO_CART", payload: product}),
    increment: (id) => dispatch({type: 'INCREMENT', payload: id}) 
  }
}

props.addToCart(...)

props.increment(3);

=========

npx create-react-app redux_example

redux_example> npm i redux react-redux

```

JavaScript in TypeScript application:
```
most of the modules are in JS including react

npm i lodash // JS library

Approach 1:[rarely we do this]
typings.d.ts

export default 'lodash' {
  random(low:number, high:number) : number
}

a.ts
import {random} from 'lodash';

console.log(random(1, 100));

Approach 2:
// Definitely Typed

https://github.com/DefinitelyTyped/DefinitelyTyped

npm i react
npm i @types/react
npm i @types/lodash
```
=========================

Day 4

Recap:
Context, Reducer, useReducer, Controlled Components, Uncontrolled Components

Redux -> Predicatable State Managment [library]
* Store: Single Store where state is managed
* Reducer: (state, action) => new State
* Root Reducer --> to combine all reducers [store --> root_reducer --> all reducers]
* compose() is used to add middleware to redux [ Redux DevTools, thunk, saga, ...]

react-redux [ library]: to integrate react with redux
* connect(mapStateToProps, mapDispatchToProps)(App)
* mapStateToProps --> provides props to react component which refers to redux store state
* mapDispatchToProps --> provides props [func] using which we can dispatch action to redux store

* Time Travel Debugging

========

RTK: Redux Toolkit
Why?
1) Simple: It simplifies creating actions, reducers, ...
2) Opinionated: Provides good defaults. Example by default Redux Development tools are configured
3) Powerful: provides immutable update logic
https://immerjs.github.io/immer/
https://immutable-js.com/
4) Effective: do more work with less code.
5) Easy integration of Async actions

========================================

Upgragde productapp to use RTK from Context

* Change CartContext to use RTK
1) delete reducers folder
2) delete CartContext.tsx
3) remove CartContextProvider reference in index.tsx
4) remove its reference in ProductCard.tsx
5) remove references in CartComp.tsx
6) remove reference in NavbarComp [Badge, quantity]
7) remove rerences in CartList.tsx [ increment]

npm i @reduxjs/toolkit react-redux
instead of
npm i redux react-redux [old]

npx json-server --watch data.json --port 1234
npm start

createSlice

```
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state) => state - 1,
    reset: () => 0
  },
})


No need for
dispatch({type:'INCREMENT', payload: 10})
instead
dispactch(increment(10));
dispatch(decrement());

```

useSelector() is approximately equivalent to the mapStateToProps argument to connect conceptually.

let {total} = useSelector(state => state.cart.total);


useDispatch() is equivalent to the mapDispatchToProps argument to connect conceptually.

let dispatch = useDispatch();
dispatch({type:'', payload: ..});
=======

function doTask() {
  return 100;
}

type MyFuncType = ReturnType<typeof doTask>;

===

redux folder
index.tsx
ProductCard.tsx
NavbarComp.tsx
CartComp.tsx
CartList.tsx

=========================

delete Context folder
remove reference in ProductList.tsx
remove refernence in index.tsx

=====

Use Asynchronous logic in Redux
Redux by default is synchronous action
to use Async logic in Redux we need middlewares like thunk / Saga / ObservableRx...

https://redux.js.org/tutorials/fundamentals/part-6-async-logic


dispatch(function); // thunk middleware intercepts --> make API call, based on response middleware can in turn dispatch further actions

Example:
dispatch(getProducts()); // Spinner Component
getProducts() makes API call
200 ==> dispatch({type:"FETCH_PRODUCTS", payload: response.data}); // reducer --> list products
404 ==> dispatch({type:"NOT_FOUND", payload: response.error}); // reducer --> ErrorComponent

dispatch(action); // middleware just delegates to reducers

https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts

pending --> fullfilled
pending --> rejected
=======================

productApi.ts
ProductSlice.ts
store.ts
productList.tsx

======================

RTK advantages over Context for Async:
1) intermediate state ==> loading, fullfilled / rejected
2) RTK Query ==> advanced data fetching and caching tool, pre-fetching, polling

======
Context will be apt to store username and avatar as soon as login
Context will be good for custom theme settings

createSlice() of RTK gives reducer functions and action
createAsyncThunk() for async actions using Thunk library, actions to be handled in extraReducers

RTK Query --> Advance Data fetching and Caching
use createApi() instead of createAsyncThunk()


Fragment. ..

customerApi.ts
store.ts
App.tsx
NavbarComp.tsx
Customers.tsx


```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Customer } from '../../model/Customer'

// to perform CRUD operations
export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
    endpoints: (builder) => ({
      customers: builder.query<Customer[], void>({
        query: () => 'customers'
      }),
      customer : builder.query<Customer, string>({
        query: (id) => `customers/${id}`
      }),
      addCustomer: builder.mutation<void, Customer>({
        query: customer => ({
            url: '/customers',
            method: 'POST',
            body: customer
        })
      })
    }),
  })

  export const {useCustomersQuery, useCustomerQuery, useAddCustomerMutation} = customerApi;

  ```
 Div polluting
 ```
  function Component() {
    return <div>
        <h1> ,,, </h1>
        <p> ...
    </div>
  }

  function X() {
    return <div>

    </div>
  }

  React Fragment is a solution for div pollution
   function Component() {
    return <>
        <h1> ,,, </h1>
        <p> ...
    </>
  }

  function X() {
    return <React.Fragment>

    </React.Fragment>
  }
  ```

  <React.StrictMode>
  </React.StrictMode>

  =============================

  