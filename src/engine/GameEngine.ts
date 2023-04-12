import {Scene, MeshBasicMaterial, WebGLRenderer, Mesh, BoxGeometry, AmbientLight, DirectionalLight} from 'three';
import {Camera} from './Camera'
import { LoopEngine } from './LoopEngine';
import { ObjectManager } from "./GameObject/ObjectManager";
import { SceneSizes } from './SceneSize';
import { GameObjLoader } from "./GameObject/GameObjLoader";

export class Engine 
{
    public readonly scene: Scene;
    public readonly camera: Camera;
    public readonly ambientLight: AmbientLight;
    public readonly directionalLight: DirectionalLight;
    public readonly loader: GameObjLoader;
    public readonly renderer: WebGLRenderer;
    private loopEngine: LoopEngine;
    public readonly objectManager: ObjectManager;
    public readonly sizes: SceneSizes;

    constructor ( width: number, height: number ) {
        this.scene = new Scene();
        this.camera = new Camera( this, width, height );
        this.loader = new GameObjLoader;
        this.objectManager = new ObjectManager(this);

        this.renderer = new WebGLRenderer();
        this.renderer.setSize(width, height);
        this.loopEngine = new LoopEngine(this);
        this.sizes = new SceneSizes(this);
        this.ambientLight = new AmbientLight( 0x008800, 0.7 );
        this.directionalLight = new DirectionalLight(0xFFFFFF, 0.4);
        this.directionalLight.rotateX(1);

        document.body.appendChild( this.renderer.domElement );
    }
    /**
     * @description
     * 
     * Start the engine
     */
    start(): void {
        this.scene.add(this.ambientLight);
        this.scene.add(this.directionalLight);
        this.loopEngine.run();
    }
    /**
     * @description
     * 
     * Update and render the scene objects
     * @param deltaTime 
     */
    update(deltaTime: number): void {
        this.camera.update(deltaTime);
        this.objectManager.update(deltaTime);

        this.renderer.render( this.scene, this.camera.instance );
    }
    /**
     * @description
     * 
     * Resizes the game scene
     */
    resize(): void {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.camera.resize();
    }
}