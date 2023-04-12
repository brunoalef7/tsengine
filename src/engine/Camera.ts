import {GameEntity} from './GameEntity'
import {PerspectiveCamera} from 'three'
import { Engine } from './GameEngine';

export class Camera implements GameEntity {
    public readonly instance: PerspectiveCamera;
    
    constructor( private engine: Engine, width: number, height: number ) {        
        this.instance = new PerspectiveCamera( 100, width / height, 0.1, 1000 );
        this.instance.position.z = 5;
    }

    setNear(near: number): void{
        this.instance.near = near;
    }

    setFov(fov: number): void{
        this.instance.fov = fov;
    }

    setFar(far: number): void{
        this.instance.far = far;
    }

    update(deltaTime: number): void {
        
    }

    resize(): void {
        this.instance.aspect = this.engine.sizes.aspectRatio;
        this.instance.updateProjectionMatrix();
    }
}