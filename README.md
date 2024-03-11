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
    "@babel/core": "^7.24.0",
    "@babel/preset-env": "^7.24.0",
    "@babel/preset-react": "^7.23.3",
    "babel-loader": "^9.1.3",
    "css-loader": "^6.10.0",
    "html-webpack-plugin": "^5.6.0",
    "style-loader": "^3.3.4",
    "webpack": "^5.90.3",
    "webpack-cli": "^5.1.4"
  }
```
