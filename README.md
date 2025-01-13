Instant Messaging Application to share messages using Image Steganography
---------------------------------------------------------------------------
This project is developed in visual Studio Code
<br><a href="https://github.com/prudhvinathreddy/chat-app" target="_blank">Access Code Files Here</a>

### STEPS to run the Project
1. Install node.js , Visual Studio Code
2. Check that node.js is added to environment variable if not add it
   - (while installing if prompted - check the box to add to path) else search for edit the system environment variables.
   - Go to environment variables and add it. it should be something like this 'C:\ProgramFiles\node.js'
4. Open the project folder "Secure Chat" in Visual Studio Code
5. Now install an extension "Angular Essentials (version 17)"
6. now Open the terminal
   - `menu > Terminal > New Terminal`
   - [Terminal window opens usually at bottom of visual studio.]
   - Now change the terminal use dropdown after the '+' icon in the bottom to get "Command Prompt" (only use Command prompt)

7. In command promt terminal use the below command to install angular CLI
   - `npm install -g @angular/cli`
   - If the packages are installed successfully go ahead run the project step 7

    (if you are getting an error saying npm is not installed it means node.js is either not installed or not added to path)

8.  To RUN the Project - Use the command
    - `ng serve`
    - After successful compilation it will Navigate you to `http://localhost:4200/`.
    - The application will automatically reload if you change any of the source files.

CODE FILES OVERVIEW
---------------------------------------------------------------------------
### Main Code
 Secure Chat > src > app 
  - app-page.component.html
  -  app-page.component.scss
  -  app-page.component.ts

### Chat application code 
    src > app > components > home-page
### Image Steganography code
    serc > app > componens > Image-Steganography
### For all other component code 
    > app > components
### For different modules 
    > app > modules

### Routing module
    > app-routing.module.ts
How each link or flow of pages in the application is decided

----------------------------------------------------------------------------------------

### How to run the project - Development server

Install angular CLI using the below command in the command promt terminal
`npm install -g @angular/cli`
Run `ng serve` for a dev server. 

----------------------------------------------------------------------------------------

Other Essentials:
---------------------------------------------------------------------------
### AngularChatApp with Image Steganography
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### developer help ##
Feel free to contact *Prudhvinath Reddy* for any queries.
Github: https://github.com/prudhvinathreddy
