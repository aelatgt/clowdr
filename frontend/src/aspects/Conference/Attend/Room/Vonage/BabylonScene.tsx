import type { Scene } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import {
    AbstractMesh,
    Color3,
    Color4,
    DirectionalLight,
    HemisphericLight,
    MeshBuilder,
    ParticleSystem,
    ShadowGenerator,
    SpotLight,
    StandardMaterial,
    Texture,
    UniversalCamera,
    Vector3,
} from "@babylonjs/core";
import React from "react";

export type BabylonSceneProps = {
    show: boolean;
};

export class BabylonScene extends React.Component<BabylonSceneProps> {
    private engine: BABYLON.Engine | any;
    private canvas: any;
    private scene: Scene | any;

    componentDidMount() {
        // start ENGINE
        this.engine = new BABYLON.Engine(this.canvas, true);

        //Create Scene
        this.scene = new BABYLON.Scene(this.engine);

        const initCameraPos = new Vector3(0, 0, 5);
        const camera = new UniversalCamera("Camera", initCameraPos, this.scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(this.canvas, true);

        // Add lights to the scene
        const light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), this.scene);
        light1.intensity = 0.8;

        const directionalLight = new DirectionalLight("light2", new Vector3(0, 2, -1), this.scene);
        directionalLight.diffuse = Color3.Red();
        directionalLight.intensity = 0.2;

        const spotLight = new SpotLight(
            "spotLight",
            new Vector3(-10, 10, 10),
            new Vector3(0, -10, -10),
            Math.PI / 2,
            12,
            this.scene
        );
        spotLight.intensity = 10;
        spotLight.diffuse = Color3.Green();

        const groundPlane = MeshBuilder.CreateGround("groundPlane", { width: 50, height: 50 }, this.scene);
        groundPlane.position = new Vector3(initCameraPos.x, initCameraPos.y - 1, initCameraPos.z);
        const groundPlaneTexture = new StandardMaterial("groundPlaneMaterial", this.scene);
        groundPlaneTexture.ambientTexture = new Texture("img/brick/BrickWallWithLightGrout_basecolor.png", this.scene);
        groundPlaneTexture.specularColor = new Color3(0, 0, 0);
        groundPlane.material = groundPlaneTexture;

        // Add and manipulate meshes in the scene
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, this.scene);

        const box = MeshBuilder.CreateBox("box", { size: 5 }, this.scene);
        box.position = new Vector3(10, 1.5, 4);

        const cylinder2 = MeshBuilder.CreateCylinder("cylinder", { height: 2 }, this.scene);
        cylinder2.position = new Vector3(2, 0, 4);

        const ico = MeshBuilder.CreateIcoSphere("ico", { radius: 2 }, this.scene);
        ico.position = new Vector3(3, 1, -4);

        //Shadows for meshs and lights
        const directionalLightShadow = new ShadowGenerator(1024, directionalLight);
        directionalLightShadow.getShadowMap()?.renderList?.push(sphere, box, cylinder2, ico);
        directionalLightShadow.useExponentialShadowMap = true;

        const spotLightShadow = new ShadowGenerator(1024, spotLight);
        spotLightShadow.getShadowMap()?.renderList?.push(sphere, box, cylinder2, ico);
        spotLightShadow.useExponentialShadowMap = true;

        groundPlane.receiveShadows = true;

        // Add Events
        window.addEventListener("resize", this.onWindowResize, false);

        window.addEventListener("click", () => {
            console.log("Click!");
            const pickResult = this.scene.pick(this.scene.pointerX, this.scene.pointerY);
            const mesh = pickResult?.pickedMesh;
            if (mesh && mesh.id != "groundPlane") {
                this.shootParticles(mesh);
            }
        });

        //Video Test

        // Render Loop
        this.engine.runRenderLoop(() => {
            this.engine?.resize();
            this.scene.render();
        });

        this.engine.runRend;
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowResize, false);
    }

    onWindowResize = (event: any) => {
        this.engine?.resize();
    };

    doVideo(video: HTMLVideoElement) {
        // This is where you create and manipulate meshes
        // const myPlane = BABYLON.MeshBuilder.CreatePlane("myPlane", { width: 5, height: 5 }, this.scene);
        // myPlane.position = new Vector3(-8, 5, 4);

        const myPlane = MeshBuilder.CreatePlane("myPlane", { width: 5, height: 5 }, this.scene);
        myPlane.position = new Vector3(-10, 1.5, 4);

        myPlane.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD);

        // // Video material
        const videoMat = new BABYLON.StandardMaterial("textVid", this.scene);
        const videoTexture = new BABYLON.VideoTexture("video", video, this.scene, true, true);

        videoMat.backFaceCulling = false;
        videoMat.diffuseTexture = videoTexture;
        videoMat.emissiveColor = BABYLON.Color3.White();
        myPlane.material = videoMat;

        const htmlVideo = videoTexture.video;
        htmlVideo.setAttribute("webkit-playsinline", "webkit-playsinline");
        htmlVideo.setAttribute("playsinline", "true");
        htmlVideo.setAttribute("muted", "true");
        htmlVideo.setAttribute("autoplay", "true");

        videoTexture.onLoadObservable.add(() => {
            this.engine?.hideLoadingUI();
        });
    }

    shootParticles(mesh: AbstractMesh) {
        const particleSystem = new ParticleSystem("particles", 2000, this.scene);
        const flareTexture = new Texture("img/flare.png", this.scene);
        flareTexture.hasAlpha = true;
        particleSystem.particleTexture = flareTexture;
        particleSystem.emitter = mesh;

        // Size of each particle (random between...
        particleSystem.minSize = 0.1;
        particleSystem.maxSize = 0.5;

        // Life time of each particle (random between...
        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = 1.5;

        // Emission rate
        particleSystem.emitRate = 1500;

        // Direction of each particle after it has been emitted
        particleSystem.direction1 = new Vector3(-7, 8, 3);
        particleSystem.direction2 = new Vector3(7, 8, -3);

        // Colors of all particles
        particleSystem.color1 = new Color4(0.7, 0.8, 1.0, 1.0);
        particleSystem.color2 = new Color4(0.2, 0.5, 1.0, 1.0);
        particleSystem.colorDead = new Color4(0, 0, 0.2, 0.0);

        // Speed
        particleSystem.minEmitPower = 1;
        particleSystem.maxEmitPower = 3;
        particleSystem.updateSpeed = 0.005;

        particleSystem.targetStopDuration = 0.25;
        particleSystem.disposeOnStop = true;

        particleSystem.start();
    }

    render() {
        const vis = this.props.show ? "visible" : "hidden";
        const w = this.props.show ? 1000 : 0;
        const h = this.props.show ? 500 : 0;

        const video = document.querySelector("video") as HTMLVideoElement;
        if (video) {
            console.log("Doing Video!" + video);
            this.doVideo(video);
        } else {
            console.log("No Video doing!");
        }

        return (
            <canvas
                style={{ width: w, height: h, visibility: vis }}
                ref={(canvas) => {
                    this.canvas = canvas;
                }}
            />
        );
    }
}
