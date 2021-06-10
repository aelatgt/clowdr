import type { Scene } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import { Color3, DirectionalLight, HemisphericLight, MeshBuilder, UniversalCamera, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";
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

        const assetManager = new BABYLON.AssetsManager(this.scene);
        const model = assetManager.addMeshTask("chairTask", "", "../../../assets/", "low-poly-mill.obj");

        model.onSuccess = function (newMeshes) {
            console.log(newMeshes);
            // newMeshes[0].position = new Vector3(10, 1.5, 4);
            newMeshes.loadedMeshes.forEach((mesh) => {
                mesh.position = new Vector3(10, -30, 0);
            });
        };

        model.onError = function (t, message, exception) {
            console.error(message, exception);
        };

        assetManager.load();

        // Add Events
        window.addEventListener("resize", this.onWindowResize, false);

        window.addEventListener("click", () => {
            console.log("Click!");
            const pickResult = this.scene.pick(this.scene.pointerX, this.scene.pointerY);
            const mesh = pickResult?.pickedMesh;
            // if (mesh && mesh.id != "groundPlane") {
            //     this.shootParticles(mesh);
            // }
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

    doVideo(video: HTMLVideoElement, index: number) {
        // This is where you create and manipulate meshes
        // const myPlane = BABYLON.MeshBuilder.CreatePlane("myPlane", { width: 5, height: 5 }, this.scene);
        // myPlane.position = new Vector3(-8, 5, 4);

        const myPlane = MeshBuilder.CreatePlane("myPlane" + index, { width: 5, height: 5 }, this.scene);
        myPlane.position = new Vector3(-10 + index * 8, 1.5, 4);

        myPlane.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD);

        // // Video material
        const videoMat = new BABYLON.StandardMaterial("textVid" + index, this.scene);
        const videoTexture = new BABYLON.VideoTexture("video" + index, video, this.scene, true, true);

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

    render() {
        const vis = this.props.show ? "visible" : "hidden";
        const w = this.props.show ? 1000 : 0;
        const h = this.props.show ? 500 : 0;

        const videos = document.querySelectorAll("video");
        if (videos.length > 0) {
            console.log("Doing Videos!" + videos);
            for (let i = 0; i < videos.length; i++) {
                this.doVideo(videos[i], i);
            }
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
