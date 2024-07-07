import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, StandardMaterial, Color3, Color4, Texture, Axis, SceneLoader } from 'babylonjs';
import 'babylonjs-loaders';

window.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    const canvas = document.getElementById('renderCanvas');

    // Generate the BABYLON 3D engine.
    const engine = new BABYLON.Engine(canvas, true, {
        disableManifestCheck: true
    });

    // Store viewed 3d mesh later here.
    let rootMesh;

    // Disable the splash/loading screen with babylon js logo.
    BABYLON.SceneLoaderFlags.ShowLoadingScreen = false;

    // Create the scene
    const createScene = function () {
        
        const scene = new BABYLON.Scene(engine);
        // Create a camera
        const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,1,-1), scene);
        // Set the clear color to transparent
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        // Load the .glb file
        BABYLON.SceneLoader.Append("", "Babylon-Model-Viewer/Assets/MikaelK.glb", scene, function (scene) {
            // Do not create default camera or light again
            // scene.createDefaultCameraOrLight(true, true, true);
            
            scene.activeCamera = camera;

            scene.activeCamera.alpha += Math.PI;
            // Create a material and add the texture
            const material = new BABYLON.StandardMaterial("textureMaterial", scene);
            material.unlit = true;
            material.disableLighting = true;
            material.emissiveColor = new BABYLON.Color3(1, 1, 1);
            const texture = new BABYLON.Texture("Babylon-Model-Viewer/Assets/color.png", scene);
            // Adjust texture properties if needed
            texture.uScale = 1; // Adjust to fit your model
            texture.vScale = -1; // Adjust to fit your model
            texture.uOffset = 0; // Adjust to fit your model
            texture.vOffset = 0; // Adjust to fit your model
            material.diffuseTexture = texture;
            // Apply the material to all meshes
            scene.meshes.forEach(function (mesh) {
                mesh.material = material;
                if (!rootMesh) {
                    rootMesh = mesh; // Assuming the first mesh is the root
                }
            });
        });

        return scene;
    };

    const scene = createScene();

    // Run the render loop
    engine.runRenderLoop(function () {
        scene.render();
        // Rotate the root mesh horizontally if it exists
        if (rootMesh) {
            rootMesh.rotate(BABYLON.Axis.Y, 0.01);
        }
    });

    // Resize the engine on window resize
    window.addEventListener('resize', function () {
        engine.resize();
    });
});
