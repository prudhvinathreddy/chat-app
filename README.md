# Instant Messaging Application with Image Steganography

This repository hosts the code for a secure instant messaging application that integrates **image steganography** to enhance message confidentiality.

## Project Overview
This project uses Angular and Visual Studio Code as the development environment. It demonstrates a secure way of sharing messages by embedding them in images, ensuring data privacy.

### Features
- Secure messaging using **image steganography**.
- Dynamic Angular-based user interface.
- Modular code structure for scalability.

### Repository
[Access Code Files](https://github.com/prudhvinathreddy/chat-app)

---

## Prerequisites

1. **Software Requirements**:
   - [Node.js](https://nodejs.org/)
   - [Visual Studio Code](https://code.visualstudio.com/)

2. **Environment Setup**:
   - Ensure Node.js is added to your system’s PATH variable during installation.
     - Alternatively, add the path manually: `C:\Program Files\node.js`.

---

## Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prudhvinathreddy/chat-app.git
   cd chat-app
   ```

2. **Open the Project**:
   - Open the folder `Secure Chat` in Visual Studio Code.

3. **Install Angular Essentials**:
   - In VS Code, install the extension: `Angular Essentials (version 17)`.

4. **Install Angular CLI**:
   - Open the terminal and set it to Command Prompt (not PowerShell):
     ```bash
     npm install -g @angular/cli
     ```

5. **Run the Application**:
   - Start the development server:
     ```bash
     ng serve
     ```
   - Navigate to `http://localhost:4200/` to view the application.
   - The application auto-reloads upon source file changes.

---

## Project Structure

### Main Code Files
- **Directory**: `src/app/`
  - `app-page.component.html`
  - `app-page.component.scss`
  - `app-page.component.ts`

### Key Components
1. **Chat Application**:
   - Directory: `src/app/components/home-page`

2. **Image Steganography**:
   - Directory: `src/app/components/image-steganography`

3. **Routing Module**:
   - File: `app-routing.module.ts`

---

## Angular CLI Commands

1. **Generate a New Component**:
   ```bash
   ng generate component component-name
   ```

2. **Build the Project**:
   - Compile the code into the `dist/` directory:
     ```bash
     ng build
     ```

3. **Run Unit Tests**:
   - Execute tests with Karma:
     ```bash
     ng test
     ```

4. **Run End-to-End Tests**:
   - Use an e2e testing tool:
     ```bash
     ng e2e
     ```

5. **Angular CLI Help**:
   - For detailed commands and documentation:
     ```bash
     ng help
     ```

---

## Contact

For questions or support, reach out to the developer:

- **Name**: Prudhvinath Reddy
- **GitHub**: [prudhvinathreddy](https://github.com/prudhvinathreddy)

---

## License
NA

