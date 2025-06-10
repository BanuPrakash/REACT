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