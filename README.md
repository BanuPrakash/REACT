# REACT

```
Banuprakash C
Full Stack Architect,
Co-founder & CTO, Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com
https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required: Visual Studio Code, Chrome Web Browser, NodeJS Latest LTS
```

Rendering: Data  --> Presentation

* Server Side Rendering
* Client Side Rendering

How Client Side Rendering has evolved wrt to Web Application:
1) DOM --> Document Object model, API which allows dynamic DOM creation, deletion, handling events ...

document.createElement("div"); 
document.createElement("table");

document.createElement("button").addEventListener("click", function() { });

2) jQuery --> Library which simplified DOM handling

$("<div/>"); --> document.createElement("div"); 
$("div"); document.getElementsByTagName("div");

$(".btn").on("click", function() {})

3) Many Libraries and Frameworks started to evolve once the concept of SPA came in

SPA --> Single Page Application [a single index.html page], with different views

Different URLS --> Different View
http://amazon.com/mobiles
http://amazon.com/mobiles/iPhone
http://amazon.com/mobiles/iPhone/16 pro

http://amazon.com/tvs
http://amazon.com/tvs/smart
http://amazon.com/checkout


3.1) Templates
helped in faster & easier creation of views
* Handlebar
* Mustache
* EJS
* PUG
* JADE
* ThemeLeaf
* Knockout

4) AngularJS --> Framework --> total MVC support
5) Backbone --> Library based on MVC Architecture
it gave Model and Controller support, for views we should be pick any of the above templates
6) React --> View Library --> Facebook
https://www.youtube.com/watch?v=8pDqJVdNa44

7) Angular --> Framework 
=================

NodeJS> 
* Platform for developing web based application
* To build traditional web application [ SSR]
* to build APIs [ REST / GraphQL]
* to build real-time applications [ ChatBot]
* ...

Why NodeJS for  developing web based application.
* We might write code in TypeScript / DART / CoffeeScript / LiveScript ...
Target is still JS engine [ V8 / Chakra / Nashorn / Rhino / Continum ...]
TypeScript is Statically typed unlike JS which is dynamically typed

let name = "Roger" ; // JS
name = 100; // valid

let name:string = "Roger" ; // TS
name = 100; // not valid in TS

tsc product.ts --> product.js

* Testing --> Unit Testing / Integration Testing / E2E 
* Static Code Analysis --> ESLint 
* Minify and Uglify the code
Minification process --> removal of extra white spaces, newlines ,..
Uglify --> Big names to shorter names

```
    /**

    **/
    function addProduct(product) {
        let newProduct  = 
    }

    gets changed to 

    function a(_p){let _n}
```
* Bundling
    products.js, customers.js, payment.js, ...

Without bundling
```
    Each script tag --> Network call
    Ordering is important
    <script src = "customer.js"></script>
    <script src = "products.js"></script>
    <script src = "orders.js"></script>
    <script src = "payment.js"></script>
```

With Bundling:

```
 <script src = "bundle.js"></script>
```

Build automation tools:
* Grunt
* Gulp
* Webpack
* vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.

Webpack --> supports bundling, this is the default used by many frameworks and libraries.

Steps:
1) initialize a node project
webpackexample> npm init --y

creates package.json
package.json --> where we configure dependencies , development dependencies, scripts

https://www.npmjs.com/

```
Babel Loader
This package allows transpiling JavaScript files using Babel and webpack.

webpackexample> npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env html-webpack-plugin webpack-dev-server -D


babel-loader: transpiling --> trans-compile
Higher version of JS to lower version of JS
I write code in ES2023, but target platform uses older version like ES5

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

https://www.npmjs.com/package/core-js

```

@babel/core: Babel transpiler --> Compiler

@babel/preset-env:

```
let add = (x, y) => x + y;

converts to:
function add(x,y) {
    return x + y;
}

I use Promise --> latest JS feature, not supported in older JS engine

webpack-dev-server: Minature Web server, by default runs on port 8080, used only in development env.

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
Also in bigger projects there will be many bundles.
 <script src = "bundle.6343c@tsd.js"></script>
  <script src = "vendor.js"></script>
 Why not:
 <script src = "bundle.js"></script>
 instead:
 <script src = "bundle.6343c@tsd.js"></script>
  <script src = "bundle.9712n$21.js"></script>

```

Module Systems:
1) CommonJS is the the default module system for NodJS

```
lib.js

function add() {

}

module.exports = {
    add
}

other files:
const add = require('./lib'); // import
```

require('webpack');  --> look for builtin module, else search in "node_modules" folder

2) ESM --> ES 6 Module System --> Babel understands this
import Product from './Product';

.babelrc or babel.config.js or babel.config.json to configure presets

```
npm run dev


asset bundle.js 8.28 KiB [emitted] (name: main)
runtime modules 695 bytes 3 modules
cacheable modules 3.34 KiB
  ./src/index.js 928 bytes [built] [code generated]
  ./src/lib.js 546 bytes [built] [code generated]
  ./src/Person.js 1.91 KiB [built] [code generated]

npm run prod


asset bundle.js 2.24 KiB [emitted] [minimized] (name: main)
runtime modules 695 bytes 3 modules
orphan modules 2.44 KiB [orphan] 2 modules
./src/index.js + 2 modules 3.34 KiB [built] [code generated]

```


take webpack-example from github
webpack-example> npm install
webpack-example> npm run dev
webpack-example> npm run prod

node dist/bundle.js

npm start

============

create a scaffolding code:

yarn create react-app customerapp

react-scripts --> wrapper on top of webpack
 "start": "react-scripts start", --> same as
 "start": "webpack serve --mode development"

https://github.com/chentsulin/awesome-react-renderer

customerapp> npm start

========

React's main job is to convert JSX to JS Object.
Actual View is rendered by different renders [react-dom, react-native, react-tv]

Core of React API is :

1) createElement


React.createElement("h1", {style:{'color':'red'}}, 'Welcome');

Nested:
React.createElement("div", null, 
React.createElement("h1", {style:{'color':'red'}}, 'Welcome'));

2) functional Component: returns JSX which is in turn given to React.createElement to convert to JS Object

```
    function MyComponent() {
        return <div> 
        <h1 style={{'color':'red'}}>
            Welcome
        </h1>
        </div>
    }
```

3) Class Component: render() returns JSX
```
class MyComponent extends Component {
    render() {
        return <div> 
        <h1 style={{'color':'red'}}>
            Welcome
        </h1>
        </div>
    }
}

```

98% of the time we use Functional components from React version 16.8+

Class Component can have state and behavior

prefer jsx as extensions for components

interpolation: Data to presentation  {friend.firstName}


props ==> data / functions passed from parent to children

```
    customer is props passed to CustomerRow component
    <CustomerRow customer={c}/>
```

map ==> function to transform

Reconciliation in React is the process the framework uses to efficiently update the DOM to match the desired state of the application. When the state or props of a component change, DOM needs to be updated.

=====================

Testing
* Unit Testing -> Testing in Isolation
* Jasmine / mocha / JEST are popular Unit testing libraries for JS
* By default React scaffolding code includes JEST
* On top of it, it adds React Testing Library for react specific test assertions...

testing files preferably should be of format
filename.test.js or
filename.spec.js 

Testing is all about AAA
A ==> Assemble
A ==> Action
A ==> Assert

describe ==> assemble
it / test -=> test spec
assert --> expect
npm test

npm test -- --coverage --watchAll

```
render(<CustomerList />); ==> integration testing, not unit testing
CustomerList ==> renders 5 CustomerRow and a Filter component

Testing in isolation, by mocking dependencies

for <CustomerRow> props [customer and delEvent] are dependencies coming from CustomerList
```

Recap of Day 1:

Part 1:
Why NodeJS?
JS build tool: Webpack
loaders: babel-loader, ts-loader, file-loader, css-loader, ...
@babel/core --> transpiler [higherversion.js ---> lowerversion.js]
tsc --> compiler [.ts --> .js]
@babel/preset-env: used for syntax transforms [arrow, spread operators], pollyfills [example functionalities like Promise are not available in lower version target JS engine: Solution provide alternate implementation of Promise {like core-js library}]

HtmlWebpackPlugin: created bundle is placed in template file [index.html]

@babel/preset-react: used to convert JSX to JS object

Part 2:
create-react-app helper with yarn or npm can be used to create a scaffolding code for react

npm create-react-app customerapp
yarn create react-app customerapp

creates a application built using webpack [hidden], react-scripts acts like a wrapper on top of webpack.
creates a sample Component App.js
creates an entry file index.js, which contains code to render the component using ReactDOM

Part 3:
React components can be created using:
a) React.createElement()
b) functional component --> returns JSX, name of the function has to start with uppercase
c) class component --> can have state and behaiour. render() returns JSX

Part 4:
RTL: React Testing Library built on top of JEST is used for Unit testing react components.

Part 5:
Reconcilliation: re-rendring UI when state of props change.
DOM vs VDOM
Any changes done in the react application, first takes a copy of VDOM and makes changes in copy.
Diff Algorithm between VDOM and VDOM_Copy. based on the changes updates happen. After updating. VDOM_Copy becomes the main VDOM and old VDOM will be destroyed

======

Day 2:

Class Component Life-cycle methods

```
onClick={() => this.incrementAge()} --> need to revisit

bind the context:
<button type='button' onClick={this.incrementAge.bind(this)}>Change Age</button> <br />

OR better
```

Thinking in React: https://react.dev/learn/thinking-in-react

Atoms: Basic Building blocks of matter such as Button, input, image;
most of the time we use this from already available components from 3rd party libraries
like Kendo, PrimeReact, react-bootstrap, adobe web spectrum

```
 <Button variant="primary">Primary</Button>
```

Molecules: Grouping atoms together --> Card
```
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
```

Organisms: Combining molecules --> CardList

Template: grouping Organisms.

===============
Functional components were meant only for pure view components, no logic prior to version 16.

React 16.4 introduced React Hooks.
React hooks are used only in functional components to introduce state and life-cycle methods in functional components.

Functional components are light-weight compared to class component

React Hooks:
* useState()
* useEffect()
* useReducer()
* useCallback()
* useRef()
* useMemo()
* useContext()

yarn create react-app hooksdemo

```
    state = {
        name: "Karthik",
        age: 18
    }

    setName(arg) {
        this.setState({
            name: arg
        })
    }

    setAge(arg) {
        this.setState({
            age: arg
        })
    }
```

npm i boostrap

============

React Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level. Avoid props drill


useReducer(): has to be used instead of useState() when state mutation depends on previous state and conditionally mutate the state.

useState()
let [name, setName] = useState("Karthik");
setName("Gopal"); // it over writes the previous data

```
Complex Data --> State: like Shopping Cart:
{
    "date:" "8-APR-2025",
    "items": [
        {"id": 6, name: "iPhone", qty: 2},
        {"id": 91, "name": "Sony OLED", qty: 1}
    ],
    "total": 923423.21
}

Based on different Actions, different way we need to mutate, also i need to use previous state

ACTION: ADD_TO_CART
payload: new item

ACTION: REMOVE_FROM_CART
payload: 91

ACTION: INCREASE
payload: 6

ACTION : CLEAR_CART

```

1) action object
```
{
    type : type_of_action,
    payload: data // optional
}
```

2) reducer function: takes prev state and action, returns new state

```
    function cartReducer(state, action) {
        switch(action.type) {
            case 'ADD_TO_CART': ...
            case 'REMOVE_FROM_CART': ...
        }
    }

```

shouldComponentUpdate() of class component in functional component --> Memoization pattern
Memoization is an optimization technique that speeds up computer programs by storing the results of expensive function calls and reusing them when the same inputs occur again,

React.memo() which can be used to memoize the prev state and props. only if they have changed it renders the component.

React.memo() is a HOC High Order Component: takes a component and conditionally return a component

```

function NameComponent(props) {
    console.log("NameComponent renders!!!")
    return (
        <div>In NameComponent name is: {props.name}</div>
    )
}

const MemoNameComponent = React.memo(NameComponent);
export default MemoNameComponent;

optionally 

function doCheck(prevProps, prevState) {
    // logic
}

const MemoNameComponent = React.memo(NameComponent, doCheck);

```

Controlled and Uncontrolled Components:
Controlled components manage their state through React state.
while uncontrolled components manage their state internally, relying on the DOM for interactions

==============================

Build one application using hooks, Context, reducer: Using Context as State management

Same application we will migrate to Redux Toolkit / Mobx for State Managment

* NavigationComponent
* ProductList
* ProductCard
* Details
* Cart
* CartList
* ProductForm
* Default

React Routers: different URLs has to display different Components and Lazy loading of components.

http://localhost:3000/products
http://localhost:3000/details/2
http://localhost:3000/cart
http://localhost:3000/new_product
http://localhost:3000/sdfsd 


yarn create react-app productsapp

productspp> npm i bootstrap react-bootstrap react-router-dom axios @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons


axios instead of fetch for API calls

<a href=""> for server side routing ---> whole page reloads

==================

Recap of Day 2:
* hooks: useState, useReducer, useEffect, useContext
* React Context: to avoid passing props thro intermediary components
* react-router-dom
- different views for different URLs
- lazy loading of components, lazy and Suspence 
* Controlled Components and Uncontrolled Component
* useRef() hook to create reference / pointer 
* createRef() same as useRef() and has to be used in Class Component
* useParams() to read Path parameters from URL

Day 3

https://immerjs.github.io/immer/
https://immutable-js.com/

npx json-server --watch data.json --port 1234
http://localhost:1234/products
http://localhost:1234/orders