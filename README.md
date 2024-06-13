# React with TS
Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Emails: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

Softwares Required:

Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

==================

1) building React with webpack [ React Demystify]
2) React 18 features
3) Typescript
4) Build react application with Typescript [all hooks , Context, Router, ...]
5) Introduce State managment with Redux for the application
6) Redux Toolkit
7) Mobx
8) PWA

----------------------------

Server Side Rendering
Client Side Rendering
React is a JS view library for CSR

index.html

<script src="react.js"> </script>
<script src="react-dom.js"> </script>
<script src="product.js"> </script>
<script src="user.js"> </script>
<script src="order.js"> </script>
50+ network calls from browser to server

Solution:
use build tools
* Grunt
* Gulp
* webpack
* vite

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 

1) compilation:
we can write our code in latest version of JS, Dart, TypeScript, CoffeeScript, LiveScript, ...

JS engine : ECMAScript Target --> ES5 version

ES2020 --> transcompile [Babel / Tracuer] --> ES5
TS --> tsc -> ES5 JS code
lsc, csc, dart compilers

2) uglify and minify
3) Testing: Unit testing
4) Lint: Static code analysis
5) bundle
<script src="vendor.js"> </script>
<script src="bundle.js"> </script>

NodeJS as platform with JS engine and execution engine

-------------------------------------------

React Demystify: [build react without using react and react-dom library]

Steps:
1) intialize a node project
npm init --y
creates package.json

2) install dependencies
npm i webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env
@babel/preset-react html-webpack-plugin -D

babel-loader: understands ESM
import Product from './Product';

NodeJS uses CommonJS Module system
const Product = require('./Product');

@babel-core: transcompiler -> loaded JS code is coverted to lower version of JS based on target

https://caniuse.com/

@babel/preset-env: syntax transforms (and optionally, browser polyfills) 
A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively has it.

```
let add = (x, y) => x + y; convert to

function add(x,y) {
    return x + y;
}
```

return new Promise(...);
https://www.npmjs.com/package/core-js

import 'core-js/actual/promise';
return new Promise(...);

@babel/preset-react: JSX to JS object

JSX: 
```
function Product() {
return <div>
    <h1>Hello </h1>
</div>;
}
```
html-webpack-plugin:  simplifies creation of HTML files to serve your webpack bundles. 
This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
index.html
<script src="bundle.js"></script>

<script src="bundle.4343s%232.js"></script>
<script src="bundle.7922446#2.js"></script>


========
yarn build
bundle.5ce1f4ea.js 4.32 KiB 

yarn prod
bundle.176926cf.js 503 bytes 

yarn start
npm start
=======

npm i lodash

====================

React Demystify:

ReferenceError: React is not defined
when JSX is found --> @babel/preset-react or  @babel/preset-react-app
this preset looks for React Object

```
let React = {

};
```
Error: Cannot read properties of undefined (reading 'createElement')

====

Convert JS Object generated from React.createElement() into UI component: Rendering

https://github.com/chentsulin/awesome-react-renderer

====================================================

React rendering phases:
1) render()
2) commit()

React 17: used Stack based rendering ==> synchronous
React 18: uses Fiber architecture --> Async concurrent rendering

https://claudiopro.github.io/react-fiber-vs-stack-demo/

npx create-react-app sampleapp

create-react-app: uses webpack to create scaffolding code

react-scripts is a wrapper for webpack commands

"start": "react-scripts start", is similar to
"start": "webpack serve --mode development"

Hook: 
useState() is a hook to introduce state variable in functional component
```
const [count, setCount] = useState(0);

Class Component:
export default class Counter {
    state = {
        count : 0
    }

    setCount(no) {
        this.setState({
            count: no
        })
    }
}
```

functional component should return JSX
class component render() returns JSX

sampleapp/node_modules/react-dom/cjs/react-dom.development.js

26586: function performUnitOfWork(unitOfWork) {

21555: function beginWork(current, workInProgress, renderLanes) {

22103:  function completeWork(current, workInProgress, renderLanes) {

26730: commitRootImpl()

======
Fixing issues:
1) Lazy loading of Component
2) use memoize
.....

Day 2

Recap: webpack, babel-loader, @babel/core, @babel/preset-env, @babel/preset-react
.babelrc
babel.config.json
babel.config.js

npx create-react-app to create scaffolding code which internally uses webpack
react-scripts --> wrapper for webpack commands

to get core webpack config:
yarn eject
npm run eject

React Hooks: introduced in react 16 version to introduce state varible and life cycle methods in functional components which was available in class component.

// specialization pattern --> inheritance
class MyComponent extends Component {

}

function MyComponent() {

}

useState() ==> to introduce a state variable

let [count, setCount] = useState(100);

let [name, setName] = useState("Roger");

function setCount(data) {
    updates the heap area;
    forceRender();
}

count = count + 1; // state changes but doesn't re-render

setCount(count => count + 1); // forces rendering

==

FCP Core web vital: First Contentful Paint

Day 2:

React Hooks:
1) useState
2) useMemo
3) useEffect

```
// componentDidMount: called only once when intially after component is rendered
useEffect(() => {
    // code
}, []);


// componentDidUpdate --> gets called whenever count [state or props] changes
useEffect(() => {
    // code
}, [count]);

// componentDidUpdate ==> gets called whenever any state / props change [ avoid ]
useEffect(() => {
    // code
});


<React.StrictMode>
will load and unload the component once before actually loading once again
StrictMode: to check any abnormal activities
```
===
React built-in HOC : memo() for memoization


useMemo() is a hook to memoize the result of function call

parent passes 19; ==> no

```
fibanocci(no) {
    // expensive result
}

let result = useMemo(() -> fibanocci(no), [no]);

function Parent(input) {
    const MyDashboard = useMemo( () => MyDashboard(input), [input]); // <div>....</div>
    return <div>
            <MyDashboard />
            <Othercomponent1 />
            <Othercomponent2 />
    </div>
}
memo() is a HOC
```
===============
JavaScript is loosely and dynamically typed language
var x  = "test"; // string
x = 24; // valid --> number

TypeScript
* provide optional type system for JavaScript
* enhance code quality and understandiblity
* catch errors at compile time instead of fail at runtime
* sort of documentation

Install typescript:
npm i typescript -g
tsc file.ts ==> file.js

Types
1) basic types: string, number, boolean

let name:string = "Roger";
name++; // tsc picks this error

2) type [ to declare the shape of object]

type Product = {
    id: number;
    name: string;
    price?: number
}

function addProduct(product:Product) : void {
    //
}

addProduct({id: 2, name: "iPhone", price : 34566.11});
addProduct({id: 2, price : 34566.11}); // error: name is missing by tsc
addProduct({id: 2, name: "iPhone"}); // valid because ? --> optional

3) 
 3.1) interface [ to decalre the shape of object similar to type]

interface Product {
    id: number;
    name: string;
    price?: number
}

// Mobile is a specialized Product
interface Mobile extends Product {
    connectivity: string;
    camera: string;
}

interface Tv extends Product {
    screenType: string
}

3.2) interface for realization relationship [ contract]
interface Renderer {
    render(): JSXElement;
}

class ReactDOM implements Renderer {
        // state and behaviour
        render(): JSXElement {
            // code
        }
}

class ReactTv implements Renderer {
        // state and behaviour
        render(): JSXElement {
            // code
        }
}

let renderer:Renderer = new ReactDOM();
renderer.render();
renderer = new ReactTv();
renderer.render();

4) class 
class can have state and behaviour

5) any 
6) unknown [ forces to do typechecking before using it]

function doTask(arg:any) {

}
invokeApiCall() is written in JS
might return JSON data / 404 / exception message

let result:any = invokeApiCall(); 

tsc anyExample.ts 
node ./anyExample.js

=====

7) Union type
let code: string | number = 1234;
code = "React";
code = true; // error

Type assertions: using "as"
Type predicates: using "is"

8) Generics

HOF:
a) functions which accept function as argmuent
b) functions which return a function

Task:
create a generic function map() to transform the data
a) each number should be doubled and returned back
b) products[] passed as argument; return string[] containing only names

typescript node project:
1) typescript installed
2) tsconfig.json

npm init --y
npm i typescript
tsc --init ==> creates tsconfig

How to use JavaScript libraries in TypeScript:
Note: most of the libraries are in JS
npm i underscore

Could not find a declaration file for module 'underscore'. 

looking for typedefinition for underscore

Solution 1: typing definition file
using typings.d.ts

Solution 2: DefinitelyTyped
https://github.com/DefinitelyTyped/DefinitelyTyped
npm i @types/underscore

=============================

Decorators: metadata for class, method, fields, parameters; basically a HOF
decorator pattern instead of specialization pattern

@decorator
Angular uses decorator pattern, react by default used specialization pattern

React Component:
class Product extends Component {
    // state and behavior
}

Angular:
@Component({
    selector: 'app-product',
    template: ` <div>
        ...
    </div>`
})
class Product {
    // state and behaviour
}

@Component({
    selector: 'app-product',
    templateUrl: `./order.html`,
    stylesUrl: ['./style.css']
})
class OrderComponent {
    // state and behaviour
}

==========

1) function classDecorator(constructor: Function) {}

@Component({
})
class OrderComponent {

2) function propertyDecorator(target:any, propertyKey:string) {}
3) function methodDecorator(target:any, methodName:string, descriptor?: PropertyDescriptor) {}
class SampleComponent {
    @NotBlank
    name:string = "hello"

    @memoize
    fetchCustomers() {
        // code
    }
}

A PropertyDescriptor describes a property on an Object.

Note:
"experimentalDecorators": true,  ==> creates proxy HOF code in JS

==========================

Day 3:
When do we need decorator factory?
* Closure
* if extra configuration has to be passed

```
class Book {
    price:number;

    //getter
    get amount() {
        return this.price;
    }

    //setter
    set amount(a:number) {
        this.price = a;
    }
}

let b = new Book();
b.amount = 343434; // setter
let amt = b.amount; // getter
```

Try building @Component class level decorator similar to one in Angular
--> adds extra members to class

=============
Typescript utility types:

1) Partial: constructs a type with all properties of Type set to optional.

interface Person {
    name: string;
    age:number;
    password:string;
    email: string;
}

function addPerson(person:Person) {

}
function login(person:Partial<Person>) {

}

login({"email": "a@gmail.com" , "password": "secret123"});


2) Omit

3) ReadOnly

const user: ReadOnly<Person> = {
    name: "A",
    age: 33,
    password: "AAA",
    email : "aaa"
}

user.password = "test"; // error

4) Tuple

5) Record
like Dictionary [key-value] pair with fixed number of keys.

```
type Course = "React" | "JS" | "TS";

interface CourseInfo {
    professor:string;
    duration:number;
}

const courses:Record<Course, CourseInfo> = {
    "React" : {
        professor : "Gavin",
        duration: 48
    },
    "JS" : {
        ...
    }
    ,
    TS: {
        ...
    }
}

```

6) infer and ReturnType
infer keyword allows to deduce a type from another type within a conditional type

```
type MyType<T> = T extends (infer E)[] ? E: T;

// t1 is  a "number"
type t1 = MyType<number[]>;

// t2 is {name:string}
type t2 = MyType<{name:string}>;


<!-- type UserType = {
    name: string;
    age: number
} -->
function getUser()  {
    return {
        name : "A",
        age: 12
    }
}
<!-- let user:UserType = getUser(); -->

type userType = ReturnType<typeof getUser>;
let user:userType = getUser();

```

Check this:
```
// Omit the 'email' property and make all properties optional.
type UserUpdate = Omit<User, 'email'> & Partial<User>;

// Create a new type with only the 'name' and 'age' properties, and make them optional.
type UserSummary = Omit<User, 'email' | 'id'> & Partial<User>;

// Create a new type with only the 'id' property, and make it required.
type UserId = Pick<User, 'id'> & Required<Pick<User, 'id'>>;

```

npx create-react-app appname --template --cra-template-typescript

========================================
memo() is a HOC

React Hooks:
1) useMemo
2) useState
3) useEffect
4) useCallback
5) useTransition [ react 18]
6) useDefferedValue [ react 18]
7) useReducer
8) useLayoutEffect [ react 18]
9) useContext

Batch updates [ react 18 ]

React 18 fiber based rendering
user events became high priority



Resume @ 11:20

build one application with react-router-dom and react context
* Redux Toolkit
* mobx

Pending:
Atoms -> molecule -> Organism -> template -> page
button/Text/Image --> Card -> CardList 

NavbarComponent
ProductList
ProductCard
CartComponent
CartList
Details
Default
ProductForm


npx create-react-app shopapp --template typescript

Libaries:
npm i axios bootstrap react-bootstrap react-router-dom @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

======

React Context : state management --> anti pattern
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Consumer:
```
for class component use this:
<CartContext.Consumer>
    {
        value => {
            value.addtoCart(...)
        }
    }

</CartContext.Consumer>

OR

let {addToCart} = useContext(CartContext);

```

useReducer() hook instead of useState()
1) state mutation is conditional
2) state mutation depends on previous state

```
action object: 
{
    type: 'type of action', // ADD_TO_CART, INCREMENT, CLEAR_ITEMS, REMOVE_ITEM
    payload?: data
}

reducer function: takes state and action ==> returns new state

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  else if  (action.type === 'dec_age') {
         return {
                age: state.age - 1
        };
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

```


npm install  @swc-react/button @swc-react/card



Recap:
```
React Hooks:
1) useState()
2) useEffect() ==> componentDidMount(), componentDidUpdate(), componentWillUnmount()
3) useMemo() 
4) useDefferedValue()
5) useTransition() ==> startTranstion(), isPending
6) useContext() ==> Context Consumer
7) useReducer()
depends on reducer function ==> (state, action) => new state
action:
{
    type: 'type_of_action',
    payload: any
}

let [state, dispatch] = useReducer(reducerFn, intialValue);

state refers to heap area where data resides
dispatch(action); => calls reducer, internally state is passed to reducer
returned value from reducer is used to update the state

8) useLayoutEffect() instead of useEffect() ==> where?
9) useImperativeHandle() ==> for ref handling

----

Context: Provider and Consumer ==> to avoid passing props thro intermediary components

react-router-dom 
-> different URLs different components
-> lazy loading of components

let userContext = createContext({"name": "Banuprakash", pic: "./avatar.png"});

```
Day 4:

React Hooks:
10) useNavigate(); --> react-router-dom

Check:
1) App.tsx: ==> add extra route for "/"
2) cartReducer.ts
3) CartContext.tsx ==> updated usage of useReducer(), passing value to context provider
4) CartList.tsx and CartConmponent.tsx ==> Context Consumer

============

adobe spectrum and adobe web components
https://spectrum.adobe.com/
https://react-spectrum.adobe.com/react-spectrum/index.html

npm i @adobe/react-spectrum

Forms:
```
1) controlled components: React is having the values of DOM element at any given point
function LoginForm() {
    let [username, setUsername] = useState("");
    let [password, setPwd] = useState("");
    function submit() {
        // api call
    }
    return <>
        Username <input type="text" onChange={(evt) => setUsername(evt.target.value)} > <br />
        Password : <input type="password" onChange={(evt) => setPwd(evt.target.value)} > <br />
        <button onClick={submit}>Submit</button>
    </>
}
2) uncontrolled components: form components alone hold the state

function LoginForm() {
    let userRef = useRef();
    let pwdRef = useRef();
    function submit() {
        let user = {
            username: userRef.current.value,
            password: pwdRef.current.value
        }
        // pass user to POST method api call
    }
    return <>
        Username <input type="text"  ref={userRef}> <br />
        Password : <input type="password" ref={pwdRef}> <br />
        <button onClick={submit}>Submit</button>
    </>
}
```

ProductForm.tsx ==> uses adobe spectrum controlled components [ form ]

==========================

Using React Wrappers for Spectrum Web Components: [lit]
npm i @swc-react/button @swc-react/card 
Default.tsx

=============================

State Management:
1) Context: by  using anti-pattern ==> part of react library

Predicatable State managment libraries:
2) Redux
3) mobx
4) recoil

Redux as predicatable State managment library:
1) state management library can be built seperatly and integraed with different view libraries or server side code.
like: React, Angular, VainllaJS, ExtTS, server side like ExpressJS
2) time travel debugging
3) good for microfront
4) uni-directional flow

Characters of Redux:
1) store: one store per redux application;
store is the place where state resides
central source of truth
every action has to go thro store
2) reducer: are function 
(state, action) => new state
Note: no need for useReducer
3) root reducer --> delegate all actions from store to reducers

Bridge redux with view libraries
1) react-redux
2) NgRx Store for angular

React time started uni-directional flow to overcome issues in MVC architecture
Model View Controller

React story:
https://www.youtube.com/watch?v=8pDqJVdNa44

Flux architecture ==> uni-directional flow

========

npx create-react-app redux-example
npm i redux react-redux

connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

function mapStateToProps(state) {
    return {
        user_img: state.profile.avatar,
        products: state.cart.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginSuccess: (user) => dispatch({type: "USER_LOGIN_SUCCESS"}, payload: user),
        addToCart: (item) => dispatch({type:"ADD_TO_CART", payload: item})
    }
}

props.addToCart({...})

props.loginSuccess(..);

https://immutable-js.com/
https://immerjs.github.io/immer/

=============

Redux Toolkit:
* simple
* Opinionated
--> configures many things out of the box by default like ReduxDevtools extension
* immutable update logic ==> uses immerjs / Autodux for immutability
Convert shopapp to use RTK instead of Context for State managment


* createSlice
```
const slice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
    reset: (state, action: PayloadAction<number>) => 0,
  },
})

slice.actions.increment(2)
```

Steps to convert Context to RTK:
1) npm i @reduxjs/toolkit react-redux 
2) remove context and reducers folder
3) remove Context reference in ProductCard.tsx
4) remove Context usage in CartComponent.tsx
5) remove Context usage in CartList.tsx