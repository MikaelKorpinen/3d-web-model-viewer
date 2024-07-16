# 3D Model WebViewer

This project is a simple 3D model web viewer that displays and rotates a single 3D model on the screen. The 3D model is loaded from a `.glb` file and displayed using Babylon.js.

## Features

- Displays a 3D model from a `.glb` file.
- Applies a texture to the 3D model.
- Rotates the 3D model slowly around the Y-axis.
- Renders the scene with a transparent background so that the model can be added on top a content.

## Technologies Used

- [Babylon.js](https://www.babylonjs.com/) - A powerful, beautiful, simple, and open game and rendering engine.
- [Babylon.js Loaders](https://doc.babylonjs.com/divingDeeper/importers/availableImporters) - Used to load `.glb` files.

## Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/MikaelKorpinen/3d-model-webviewer.git
   cd 3d-model-webviewer
   ```
2. **Install dependencies:**
   Make sure you have Node.js and npm installed.

  ```sh
  npm install
  ```
3. **Build the project:**
```sh
npm run build
```
4. **Run a local server:**
You can use a simple HTTP server to serve your files locally. If you don't have one, you can install http-server:
```sh
npm install -g http-server
```
5. **Start the server:**
```sh
http-server ./dist
```
6. **Open your browser:**
Navigate to http://localhost:8080 (or the port number provided by http-server) to view the 3D model web viewer.

## Project Structure
- index.html - The main HTML file that includes the canvas element and loads the JavaScript bundle.
- src/main.js - The main JavaScript file that initializes Babylon.js, loads the 3D model, applies the texture, and handles the rendering loop.
- webpack.config.js - The Webpack configuration file for bundling the project.
- package.json - The npm package file that includes project dependencies and scripts.

## Usage
- Place your 3D model file (MikaelK.glb) in the Babylon-Model-Viewer/Assets/ directory.
- Place your texture file (color.png) in the Babylon-Model-Viewer/Assets/ directory.
- Open the web viewer in your browser to see the model rotating slowly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
