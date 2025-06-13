# REACT
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/
https://github.com/BanuPrakash/REACT

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS
```

Introduction NodeJS and webpack
React basics
React Hooks and State management with Context
Predicatable State managment with Redux / RTK

==========

Rendering: Data --> Presentation
SSR --> server side rendering
CSR --> Client Side rendering

CSR for web application:
* JavaScript and DOM
document.createElement("div");

* jQuery 
$("<div/>")


* Templates
Handlebars, Mustache, EJS, PUG, JADE, Knockout, ...

```
<table>
    <tr>
        <td>{{id}}</td> <td>{{firstName}}</td>
    </tr>
</table>

```

SPA --> Single Page Application, State managment, routing

Frameworks and Libraries
* Backbone library based on MVC Architecture; View --> use any of the above mentioned templates
* AngularJS -- Google --> Framework --> MVC 
* React library --> XHP, FaxJS, ReactJS --> Only View library

Angular digest and apply cycle issues because bi-directional/two way data binding
M <--> V

* Angular --> Framework

=================================

NodeJS: Platform with V8 JavaScript engine and libuv library [Async code handling]

JS needs JavaScript engine [ V8 / Nashorn / Rhino / Chakra, ...]

NodeJS:
* for web application development
* testing
* linting
* bundling
* Compiling / Transpiling
* Build APIs
* Real time application

We can write the code in TypeScript / Latest JS version / CoffeeScript / LiveScript/ DART

TypeScript: statically typed , typesafe

Webpack: JS build tool like Grunt / Gulp / Vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, uglify, compilation, unit testing, and linting

node --version

===
npm --> node package manager
yarn/ pnpm / Rush --> alternate
1) npm init --y
creates a nodejs project

package.json --> place where we configure dependencies / devDependencies/peerDependencies, scripts

npm start
npm test

2) install devDependencies

npm i babel-loader @babel/core @babel/preset-env

babel-loader loads js file which has latest JS features
loaded file is given to @babel/core --> transpile to lower version of JS based on configuration.
While converting to lower version
1) Syntax transform
```
ES 6 - ES 2015
let add = (x, y) => x + y;
```
Target ES 5:
```
function add(x,y) {
    return x + y;
}
```
2) Polyfills
@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
Polyfills are code snippets, often written in JavaScript, that provide modern functionality in browsers that lack native support for specific features. They act as fallbacks

Promise.resolve(() => 100);

nodejs --> builtin modules
3rd party modules are downloaded into node_modules folder

npm i

Module Systems: IIFE, CommonJS, ESM, System, AMD, ...

ESM --> Module System.

Default module system is CommonJS understood by JS engine

```
module.exports = {add, subtract}

index.js
let {add, subtract} = require('./lib');
```
npm run dev

asset bundle.js 7.08 KiB [emitted] (name: main)

npm run prod
asset bundle.js 1.29 KiB [emitted] [minimized] (name: main)


JSX --> @babel/preset-react uses React.createElement() --> JS object

JS object --> Renderers --> UI related DOM

https://github.com/chentsulin/awesome-react-renderer

=======================================

npm i yarn -g
yarn create react-app customer-app

or

npx yarn create react-app customer-app

Creating React elements:
1) React.createElement() core API
2) Class Component
    render() function returns JSX --> is passed to React.createElement()
3) Functional Component
a Function component is one which returns JSX --> is passed to React.createElement()

Thinking in React:
1) Atoms: These are the most basic building blocks of an interface, such as buttons, inputs, and labels. They are the smallest and most indivisible components.
99% of the time we use ready made atoms
https://react-spectrum.adobe.com/react-spectrum/index.html
https://react-bootstrap.netlify.app/docs/components/accordion

Kendo, PrimeReact, MUI, ...

2) Molecules: These are groups of atoms bonded together to form a functional unit. For example, a search bar/ Card/ Table might be a molecule made up of an input atom and a button atom.
50% of time we use ready made

Organisms: These are more complex components made up of molecules and/or atoms. They form distinct sections of an interface, such as a navigation bar or a list of product cards.

Templates: These are page-level layouts that define the structure of a page without specific content. They are composed of organisms and molecules.
Pages: These are specific instances of templates with real content. They represent the final user interface that users see.

====

class component can have state, behaviour and life-cycle methods

map --> HOF --> transform

props --> mechanism to pass data/function to child component [like attributes of XML]

```
    <img src="a.gif" width="200px" >
```
 
 Each child in a list should have a unique "key" prop.
 https://legacy.reactjs.org/docs/reconciliation.html
 Reconciliation: whenever props, state changes React component is re-rendered.

============

Unit testing:
JS has unit testing frameworks:
1) Jasmine
2) Mocha
3) JEST

Angular Test Bed is based on Jasmine
React Testing Library is built on top of JEST
https://testing-library.com/docs/react-testing-library/intro/

getBy
queryBy
findBy
screen.getByText(/Customer Application/i)
screen.getByPlaceHolderText(/search by name/)

screen.getAllByRole('button');

Testing is AAA --> Assemble Action Assert
one file is one test suite or use describe

npm test -- --coverage --watchAll

<Menu title="Deliciuos Recipes" />

=============

Functional Components, hooks, context, life cycle methods...

Recap:
```
* NodeJS, webpack
* babel-loader, ts-loader, css-loader, file-loader
import Product from './Product'; // js file --> babel-loader
import Product from './Product'; // ts file --> ts-loader
import './styles/style.css'
* @babel-core --> transpiler 
* @babel/preset-env -> syntax transform and polyfills
* @babel/preset-react --> JSX to JS object conversion
looks for React.createElement()

React:
createElement(), functionalComponent , class component
functionalComponent: function should start with UpperCase and return JSX
class Component:
1) extends Component
2) render() method returns JSX
3) can have state, life cycle methods

RTL: unit testing react components.
```
=======

Day 2:

React class Component life-cycle methods
Mounting Phase: 
constructor() -> render() -> componentDidMount()
initialize --> render JSX to JS --> Make API calls

If we Make API calls in Constructor --> FCP issues --> First Contentful Paint --> Web Vitals

Updating Phase:
once state/props changes
shouldComponentUpdate() --> true --> render() --> componentDidUpdate() [dependend API calls to be made]
shouldComponentUpdate() --> false

Unmounting:
componentWillUnmount() --> any logic before component is getting destroyed like unsubscribe

========================

Conditionally render component. --> shouldComponentUpdate()

```
    let product = {
        "name": "Sony",
        updateName: function(n) {
            this.name = n;
        }
    }

    product.updateName("LG"); // works

    let ref = product.updateName; // get reference to function, context is lost
    ref("Samsung"); // doesn't have the context "this"

    solution:
    let ref = product.updateName.bind(product);
     ref("Samsung"); // works

```

Life Cycle methods are available only for class component.

React.memo() --> memoization pattern where in it memoizes prev state and props.
only if it changes will the component re-render.

from React 16.8 version onwords prefer Functional components 
98% of usage --> functional components

```
    @Component({
        template: `<div></div>`,
        styles: './styles.css'
    })
    public class ProductComponent {
        name;
        price;
    }
```

What was not possible in Functional Components?
1) state
2) life-cycle methods

React 16.8 introduced Hooks for functional components to have state and life-cycle methods.

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

React Hooks:
1) useState
2) useEffect
3) useReducer
4) useCallback
5) useContext

The useReducer Hook is similar to the useState Hook. It allows for custom state logic. 
 more suited for managing state objects that contain multiple sub-values.
--> prefer useReducer over useState if we need to conditionally mutate the state and mutation depends on previous state.

state:
```
{
    cart: {
        cartItems: [
            {
                id: 6,
                qty: 2,
                amount: 8001
            },
            {
                id: 9,
                qty: 1,
                amount: 9111
            }
        ],

        total: 12000.00
    }
}
```

Action: Add to Cart --> payload --> should get existing cartItems and add new paylod
get existing total and add new amount
Increment: payload will just have "id"
clear cart, remove item from cart

=====
useReducer:
1) Action object
``` 
    {
        type: 'ADD_TO_CART',
        payload: {...}
    }

    {
        type: 'INCREMENT',
        payload: 4
    }

    {
        type: 'CLEAR_CART'
    }
```

2) reducer function

```
    function reducerFn(state, action) {
        // perform operation based on action type
        return new state;
    }
```

Example: Counter --> count --> INCREMENT / DECREMENT, RESET actions

========

React Context:
React Context is a feature that allows data to be shared between components without explicitly passing props through each level of the component tree, which is often referred to as "prop drilling".

===============

Build a SPA using:
1) react hooks
2) react context
3) react router dom
4) axios for API call instead of fetch
5) bootstrap for CSS
6) react-bootstrap
7) fontawesome for icons

Part 2:
update the code to typescript

part 3:
update the code to use Redux

react router dom:
1) Single Page Applications we need different URLS for different views/components
http://amazon.com/mobiles
http://amazon.com/mobiles/iPhone/16
http://amazon.com/tvs
http://amazon.com/cart ==> load cart component lazily

Navigate between views <--  -->
2) Lazy loading of Components
By default we have bundle.js having all components --> FCP issue

```
<script defer src="/static/js/bundle.js"></script>
```
have only minimum components in "bundle.js"

Components for the application:
1) NavbarComponent
2) ProductList
3) ProductCard
4) CartComponent
5) CartRow
6) Details
7) Default
8) ProductForm --> to add new Product

yarn create react-app productapp

productapp> npm i axios bootstrap react-bootstrap react-router-dom @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

----

Bootstrap --> CSS Framework by Twitter --> styling --> RWD
bootstrap uses 12 grid/ column system
Each row is made of 12 columns

<img src="somepic.png" class="col-sm-12 col-md-6 col-lg-4">

Ionic Framework helps to migrate web react application to mobile application

http://localhost:3000/cart
http://localhost:3000/products
http://localhost:3000/details/4


===

Day 3:
cartReducer.js
CartComponent.jsx
CartRow.jsx

JSON Server is a Node.js package that allows you to create a full fake REST API with zero coding. It's ideal for prototyping, testing, and developing applications when a backend API isn't ready yet.

npx json-server --watch data.json --port 1234

==========

Controlled Component and UnControlled Components

Controlled Components:
State-Driven:
The component's value is driven by React state.
Full Control:
Developers have complete control over the component's data, allowing for real-time validation and manipulation.

```
    function Sample() {
        let [name, setName] = useState("");
        return (
            <input type="text" onChange={(evt) => setName(evt.target.value)} />
        )
    }
```

Uncontrolled Components:
DOM-Driven:
The component's value is managed by the DOM itself. 
Performance:
Uncontrolled components can offer better performance for simple forms as they avoid unnecessary re-renders.

```
    function Sample() {
        return (
            <input type="text" />
        )
    }
```

TypeScript: statically typed language 

yarn create react-app productapp-ts --template typescript
ts-loader instead of babel-loader
With Typescript --> All JS code is valid.

productapp-ts> npm i bootstrap

====

Predicatable State Managment libraries:
* Flux Architecure
* Redux
* Mobx
* recoil

Advantages over React Context:
1) state management can be developed as a seperate module, can be integrated into backend, react, angular, vue, jQuery , ...
2) Time travel debugging
3) Good for Micro Frontend

The Flux architecture is a design pattern for managing data flow in applications, particularly front-end web applications built with React. It was introduced by Facebook as an alternative to the traditional Model-View-Controller (MVC) architecture.

https://www.youtube.com/watch?v=8pDqJVdNa44&t=17s

Redux:
1) Store: central place of truth --> state resides
Application has only one store
2) Reducers: (state, action) -> new state
3) root reducer: combine reducers

React: view components

React-Redux: bridge library

yarn create react-app reduxapp
cd reduxapp
reduxapp> npm i redux react-redux

===================

https://redux-toolkit.js.org/

RTK Opinionated:
1) Devtools is configured by default
2) Out of the box support for Async operations

RTK Powerful:
1) Takes inspiration from libraries like Immer and Autodux to let you write "mutative" immutable update logic
https://immutable-js.com/
https://immerjs.github.io/immer/
Why not directly change the collection?

=======

Product Application
Migrate from React Context to RTK 


=======================

Day 5:

Migrate productapp from usage of Context to RTK.

cloned productapp [without node_modules]
productapp-rtk> npm i
productapp-rtk> npm i @reduxjs/toolkit react-redux
productapp-rtk> npx json-server --watch data.json --port 1234

Migrating
1) remove reducer and context references in the project
a) delete reducers and context folder
b) index.js
c) ProductCard.jsx
d) NavbarComponent.jsx
e) CartComponent.jsx
f) CartRow.jsx

createSlice:
A function that accepts an initial state, 
an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

```

const initialState = { value: 0 } 

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => state.value++
   ,
    decrement: (state) => state.value--
    ,
    incrementByAmount: (state, action: PayloadAction) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

export default function countReducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                value: state.value + 1
            }
    }
}
```