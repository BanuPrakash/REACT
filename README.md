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
