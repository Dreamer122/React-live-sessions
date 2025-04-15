 # React Notes                                                                          

## Basics:   
Q✍️ . Create Hello World Program using only HTML 

Q✍️ . Create Hello World Program using Javascript 

Q✍️ . What is crossorigin in Content Delivery  Networks  (CDN) Links   
      Crossorigin:  
                The crossorigin attribute in the script tag enables Cross-Origin  Resource Sharing (CORS) for loading 
          external JavaScript files from a  different origin than the hosting web page. This allows the script to 
          access resources from the server hosting the script, such as making  HTTP requests or accessing data. 

Q✍️ . To make our app Production ready what should we do? 

      1. Minify our file (Remove console logs, bundle things up) 
      2. Need a server to run things

      Minify —> Optimization —>Clean console —> Bundle 

      * Bundlers: 
        In React, to get external functionalities, we use Bundlers. It  packages your app properly so it can be shipped to production. Examples: 
        1. Webpack 
        2. vite 
        3. Parcel 

        In create-react-app, the bundler used is webpack 

   ### Package Manager: 
            Bundlers are packages. If we want to use a package in our code,  we have to use a package manager.  
            We use a package manager known as npm or yarn 
        * npm: 
            npm doesn’t mean node package manager but everything else. 
            ** npm init (Creates a package.json file) **
            ** npm install -D Vite**
             Vite is one of the dependency 
             **Dev dependency**: because we want it in our  development machine 
             Then, we’ll get a **package-lock.json file**
      ** package-json: **
              It is a configuration for npm
      ** Caret sign(^): **
              If we use caret sign, then it will automatically update to the
              minor versions and patch versions.
      ** Tilde sign(~): **
             If we use tilde sign, then it will automatically update only to the patch versions.
      ** package-lock.json: **
              Will tell you which exact version of the library we are using.

### * node_modules:
- Which gets installed is like a database for the npm.
- This is where super powers comes from.
- Our app has dependency on Vite
- Vite also has dependencies on something else.
- All these dependencies / superpowers are in node_modules
- Every dependency in node_module will have its package.json


### Features of Vite  
    Vite is a next-generation frontend tool that provides an extremely fast development experience for modern web applications. Here are its key features:

    ⚡ 1. Lightning-Fast Cold Starts  
        - Uses ES modules (ESM) to speed up development.  
        - No bundling during development, making it significantly faster than traditional bundlers like Webpack.  
    🔥 2. Hot Module Replacement (HMR)      
        -  Instantly updates changes without refreshing the page.  
        -  Keeps application state intact while making code changes.  
    📦 3. Optimized Build with Rollup  
        -  Uses Rollup under the hood for efficient production builds.  
        -  Generates optimized static assets with tree-shaking and code splitting.  
### * Transitive Dependencies:
    - We have our package manager which takes care of our
      transitive dependencies of our code.
    - If we’ve to build a production ready app which uses all
      optimisations (like minify, bundling, compression, etc), we
      need to do all these.
    - But we can’t do this alone, we need some dependencies on it.
      Those dependencies are also dependent on other dependencies.

      
   ![dependencytree](https://github.com/user-attachments/assets/c19d4700-8319-4cf9-a4e1-079cba651021)



# CLASS 2

## * createElement: 
    - React.createElement() is creating an object. 
    - This object is converted into HTML code and puts it upon DOM. - If you want to build a big HTML structure, then using  createElement() is not a good Solution. 
    - So there comes introduction of JSX 
# * JavaScript XML ( JSX): 
    - When Facebook created React, the major concept behind  bringing react was that we want to write a lot of HTML using  javascript, because JS is very performant. 

![Screenshot 2025-04-10 155505](https://github.com/user-attachments/assets/983028c2-46ba-4985-a4c5-892710c28125)


    - JSX is not ‘HTML inside JavaScript’
    - JSX has ‘HTML like syntax‘
    - React keeps track of keys

    - Our browser cannot understand JSX. Babel understands this
    code.
    - JSX uses React.createElement() behind the scenes.

    JSX => React.createElement() => object =>HTML DOM

    - Babel converts JSX to React.createElement()
    - JSX is created to empower React.

### * Advantages of JSX:
    - Developer Experience
    - Syntactical Sugar
    - Readibilty
    - Less code
    - Maintainability
    - No Repitition


    ** Babel comes along with VITE **


# * Components:
    - Everything is a component in React.
# * React Components:
    There are 2 types of components
    Functional Components - NEW way
`   Class Based Components - OLD way



### * Functional Components:
    - is nothing but a JavaScript function.
    - is a normal JS function which returns some piece of react
    elements (here, JSX)

    - For any component, Name starts with capital letter. (It is not
      mandatory but it’s a convention)
    - To render functional component write <HeaderComponent />

   **React Element:**
  
 ![Screenshot 2025-04-10 160345](https://github.com/user-attachments/assets/abbfbc08-800e-4677-b031-32f4e4b11170)

   **Functional Component:**

![Screenshot 2025-04-10 160436](https://github.com/user-attachments/assets/f21e57cf-124f-4ab1-b832-6bff2318a124)

   #### Important points:
    - Whenever you write jsx, you can write any piece of javascript
    code between Paranthesis {}. It will work.
    - JSX is very secure.
    - JSX makes sure your app is safe.
    - It does samitization.

    #### * Component Composition:
    - If I have to use a component inside a component. Then it is called
    component composition / composing components.
    3 ways of component composition:
    - {Title()}
    - <Title /> (used generally)
    - <Title></Title>

    **Note:**
    JSX expressions must have one parent element.

# CLASS 3

## * React Fragment:
    - It is a component which is exported by ‘React’.
    [ import React from “react” ]
    - Groups list of children without adding extra nodes to the DOM.
    - Shorthand syntax <> </> is used generally instead of
    <React.Fragment> </React.Fragment>
    - But, you cannot pass styles to empty brackets.

## Styling inside React:
    - Using Javascript Object.
    - giving class name to the respective tag and write the css
    inside .css file.
    - using external libraries like ‘Tailwind CSS’, ‘Bootstrap’,
    ‘Material UI’, etc.

## Q . Can I use ‘React.Fragment ’ inside my ‘React.Fragment’?
    Yes 
  ![Screenshot 2025-04-10 162416](https://github.com/user-attachments/assets/801fef1b-6225-4726-9cb4-eb2bbbb8bbbc)



**Note:**
    In real world, data coming from api comes as “Array of Objects”

### * Optional Chaining:
    - Allows us to access an object’s properties without having to check
    if the object or its properties exist.
    - represented by ? operator.
    - Introduced in JavaScript ES 2020.

    **Example:**
    restaurantList[0].data?.name
### * Props:
    - shorthand for properties
    - When we say "pass props," we mean we're transferring data or
    specific features into our React components. Just like passing
    information to a friend, we're sending data to our components to
    define their behavior and characteristics.
    - resData = {restaurantList[0]}
    This means react wraps up all these properties into a variable
    known as ‘props’. We can call it anything.
#### * Object Destructuring:
    - It unpacks specific properties from an object into individual
    variables, streamlining data access and making code cleaner.

#### * Spread Operator (...):
    - It unpacks iterables like arrays and objects, spreading their
    elements wherever it's used.
    Example:
    - Combine arrays: [...a, ...b] joins a and b.
    - Add elements: [...a, "new"] puts "new" at the start of a.
    - Pass function arguments: func(...a) expands a as individual
    args.



# CLASS 4

## * Virtual DOM:
    - The Virtual DOM is React's secret weapon! Imagine it as a
    lightweight, in-memory snapshot of your webpage's UI.
    - When changes happen, React updates this snapshot first, then
    efficiently figures out the minimal edits needed to bring the real
    DOM in sync.
    - We need Virtual DOM for Reconciliation.

## * Reconciliation:
    - It takes the updated Virtual DOM and figures out the most
    efficient way to bring the real DOM in line.
    - It uses Diff Algorithm and it determines what needs to change
    and what does not in UI.
    - To find out difference between one tree (Actual DOM) and other
    (Virtual DOM).
    - Diff Algorithm then finds out what needs to be updated and it
    change only that small portion.

## * React Fiber:
    - React Fiber is a complete rewrite of React's internal reconciliation
    engine, built for speed and flexibility.
    - It is responsible for Diff Algorithm.
    - So, Reconciliation is the "what" of updating the DOM, while React
    Fiber is the "how" it's done in a more efficient and flexible way.


### * React File Structure:
    - React itself doesn't dictate a specific file structure, but common
    best practices help keep your code organized and maintainable.

### * Export:
    - There are 2 types of exports commonly used:

    **1. Named Export:**
    - Exports multiple values with custom names, imported with
    specific names
    (e.g., `export const add = (a, b) => a + b;
    import { add } from "./math";`).


    **2. Default Export:**
    - Exports only one value, imported with name
    (e.g., ` Hello=()=> { ... };
    export default Hello;
    import Hello from "./greetings";`).

## * React Variable:
    - It is like a state variable

   **“Every component in React maintains a state. So, you can put
    some variables on to that state”**

    - Everytime, you have to create a local variable, you can use state
    in it.
    - In react, if I want to create a local variable like ‘searchText’, I will create it using useState Hook.

## * Hooks:
    - Hooks are normal functions.
    - React Hooks are like tools you can "hook into" React features
    without needing a class component.
    - Hooks bring the power of classes to function components,
    making your React code simpler and more flexible.
    
## * useState Hook:
    - Its used to create state variables.
  
    **const [searchText]=useState()**
  
    a. This function returns an array.
    b. The first element of this array is variable name
    c. Second Element is a set function to update the variable
    
    - searchText is a local state variable.
    - To give a default value to my useState variable we do this:
        **const [searchText]=useState("BurgerKing")**

    - In React, to modify the variable ‘searchText’, I have to use
      a function.
      
    - useState() gives us that function.
    - Let us call that function as setSearchText()
    
