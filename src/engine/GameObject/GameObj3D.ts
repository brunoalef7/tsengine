import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Engine } from '../GameEngine';
import { GameObj } from './GameObj';
import { Color, Mesh, MeshBasicMaterial, Object3D } from 'three';

export class GameObj3D extends GameObj 
{
    private loaded: boolean;

    public constructor( name: string ) {
        super(name);
        this.loaded = false;
        this.material = new MeshBasicMaterial({ color: 0xf0ff00 });               
    }

    public load(engine: Engine, resourcePath: string) : void {
        if(this.loaded) return;

        var objPromise = engine.loader.load(resourcePath);

        objPromise.then((obj) => {
            super.copy(obj);
            this.loaded = true;
            this.setColor(0x0000ff);
            this.setPosition(0, -2, -3);
        }); 
    }

    public create ( obj: Object3D ) : void {
        if(this.loaded) return;
        this.loaded = true;

        this.copy(obj);
    }
    /**
     * @description
     * 
     * Sets the object position in the scene
     * @param x 
     * @param y 
     * @param z 
     */
    public setPosition(x: number, y: number, z: number): void {
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    }
    /**
     * @description
     * 
     * Change the materials colors
     * @param color 
     */
    setColor(color: number) : void {
        if(this.loaded) {
            let newColor = new Color();
            newColor.setHex(color);

            this.traverse((child: Object3D) => {
                if (child instanceof Mesh)
                  child.material.color = newColor;
                });
        }     
    }
    /**
     * @description
     * 
     * Simple method to animate the square object
     */
    private animate(): void {        
        //this.rotation.x += 0.01;
        this.rotation.y += 0.001;
    }

    update(delta: number): void {
        super.update(delta);
        this.animate();
    }
}