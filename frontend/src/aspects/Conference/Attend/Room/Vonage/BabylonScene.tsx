import type { ArcRotateCamera, Scene } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import React from "react";

class BabylonScene extends React.Component {
    private engine: BABYLON.Engine | any;
    private canvas: any;
    private camera: ArcRotateCamera | any;
    private scene: Scene | any;

    componentDidMount() {
        // start ENGINE
        this.engine = new BABYLON.Engine(this.canvas, true);

        //Create Scene
        this.scene = new BABYLON.Scene(this.engine);

        //--Light---
        this.addLight();

        //--Camera---
        this.addCamera();

        // Add Events
        window.addEventListener("resize", this.onWindowResize, false);

        // Render Loop
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowResize, false);
    }

    onWindowResize = (event: any) => {
        this.engine?.resize();
    };

    /**
     * Add Lights
     */
    addLight = () => {
        //---------- LIGHT---------------------
        //Create a basic light, aiming 0,1,0 - meaning, to the sky.
        new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), this.scene);

        const light = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 10, 0), this.scene);
        light.intensity = 0.7;
        // let lightImpostor = BABYLON.Mesh.CreateSphere("sphere1", 16, 1, scene);
        // let lightImpostorMat = new BABYLON.StandardMaterial("mat", scene);
        // lightImpostor.material = lightImpostorMat;
        // lightImpostorMat.emissiveColor = BABYLON.Color3.Yellow();
        // lightImpostorMat.linkEmissiveWithDiffuse = true;
        // lightImpostor.parent = light;
        // // Shadow
        // const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        // shadowGenerator.setDarkness(0.5);
        // shadowGenerator.usePoissonSampling = true;
        //
        // let lensFlareSystem = new BABYLON.LensFlareSystem(
        //     "lensFlareSystem",
        //     light,
        //     scene
        // );
        //
        // new BABYLON.LensFlare(
        //     0.2,
        //     0,
        //     new BABYLON.Color3(1, 1, 1),
        //     "shader/lensflare0.png",
        //     lensFlareSystem
        // );
        // new BABYLON.LensFlare(
        //     0.5,
        //     0.2,
        //     new BABYLON.Color3(0.5, 0.5, 1),
        //     "shader/lensflare3.png",
        //     lensFlareSystem
        // );
        // new BABYLON.LensFlare(
        //     0.2,
        //     1.0,
        //     new BABYLON.Color3(1, 1, 1),
        //     "shader/lensflare3.png",
        //     lensFlareSystem
        // );
        // new BABYLON.LensFlare(
        //     0.4,
        //     0.4,
        //     new BABYLON.Color3(1, 0.5, 1),
        //     "shader/lensflare2.png",
        //     lensFlareSystem
        // );
        // new BABYLON.LensFlare(
        //     0.1,
        //     0.6,
        //     new BABYLON.Color3(1, 1, 1),
        //     "shader/lensflare0.png",
        //     lensFlareSystem
        // );
        // new BABYLON.LensFlare(
        //     0.3,
        //     0.8,
        //     new BABYLON.Color3(1, 1, 1),
        //     "shader/lensflare0.png",
        //     lensFlareSystem
        // );
    };

    /**
     * Add Camera
     */
    addCamera = (): void => {
        // ---------------ArcRotateCamera or Orbit Control----------
        this.camera = new BABYLON.ArcRotateCamera(
            "Camera",
            Math.PI / 2,
            Math.PI / 4,
            4,
            BABYLON.Vector3.Zero(),
            this.scene
        );
        this.camera.inertia = 0;
        this.camera.angularSensibilityX = 250;
        this.camera.angularSensibilityY = 250;

        // This attaches the camera to the canvas
        this.camera.attachControl(this.canvas, true);
        this.camera.setPosition(new BABYLON.Vector3(5, 5, 5));

        // ---------------Follow Camera----------
        // This creates and initially positions a follow camera
        // this.camera = new BABYLON.FollowCamera("Camera", new BABYLON.Vector3(0, 3, -5), scene);
        //
        // this.camera.radius = 10;
        // this.camera.heightOffset = 5;
        // this.camera.rotationOffset = 0;
        // this.camera.cameraAcceleration = 0.01
        // this.camera.maxCameraSpeed = 10
        //
        // // This attaches the camera to the canvas
        // this.camera.attachControl(this.canvas, true);
    };

    /**
     *  Create a built-in "ground" shape.
     */
    addGround = () => {
        //Create ground from Box
        // const groundMesh = BABYLON.MeshBuilder.CreateBox(
        //     "ground",
        //     { height: 0.3, width: GROUND_SIZE, depth: GROUND_SIZE, subdivisions: 16 },
        //     scene
        // );
        //
        // //Ground Material
        // const groundMaterial = new BABYLON.StandardMaterial("grass0", scene);
        // groundMaterial.diffuseTexture = new BABYLON.Texture(
        //     "./assets/ground.jpeg",
        //     scene
        // );
        // groundMesh.material = groundMaterial;
        //Add Bumps
        // this.applyBumpTexture(groundMesh, "./textures/concrete/");
        //Add Grass
        //this.addGrass(groundMesh);
        //Shadow
        // groundMesh.receiveShadows = true;
        //
        // //Ground Physics
        // groundMesh.physicsImpostor = new BABYLON.PhysicsImpostor(
        //     groundMesh,
        //     BABYLON.PhysicsImpostor.BoxImpostor,
        //     { mass: 0, friction: 1.5, restitution: 0.7 },
        //     scene
        // );
    };

    render() {
        return (
            <canvas
                style={{ width: window.innerWidth, height: window.innerHeight }}
                ref={(canvas) => {
                    this.canvas = canvas;
                }}
            />
        );
    }
}

export default BabylonScene;
