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


