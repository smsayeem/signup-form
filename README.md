# Signup Form
### Its a signup form where user enter their deatils with following acceptance criteria
-Email must be a valid email address.<br />
-Password must be longer than 8 characters.<br />
-Color must be selected.<br />
-At least two Animals must be chosen.<br />
-If Tiger is one of the chosen Animals then Type of tiger is required to be a non-empty string.<br />
## Local Development

To run the app in the local development environment run the following command

```bash
npm install

npm start
```
The application will be loaded on port 3000 by default unless this port is busy. http://localhost:3000 to view it in the browser.

```bash
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
And the app is ready to be deployed!<br />


## Folder Structure
- Every component is placed in a folder with the name of the component. The filename for the component is index.js

```
|-- src
    |-- |components
    |   |-- FormSuccess
    |       |-- index.js
    |   |-- Form
    |       |-- components
    |           |-- FormValidation
    |               |-- validateInfo.js
    |       |-- index.js
    |   |-- TextBlock
    |       |-- index.js
    |-- App.js
    |-- App.css
    |-- App.test.js
    |-- Index.js
```
- published app: https://modest-golick-3e5106.netlify.app/
