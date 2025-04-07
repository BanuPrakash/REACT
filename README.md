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