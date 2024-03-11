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

