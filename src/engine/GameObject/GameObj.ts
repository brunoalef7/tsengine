import { ObjectManager } from "./ObjectManager";
import { IObject } from "./IObject";
import { Mesh, MeshBasicMaterial, Object3D, PlaneGeometry, Vector3 } from "three";

export class GameObj extends Object3D implements IObject {    
    material: MeshBasicMaterial;
    geometry: PlaneGeometry;
    
    private objectManager?: ObjectManager;
    private isInScene: boolean;
    public autoInsert: boolean;
    public position: Vector3;
    public rotation: Vector3;
    
    constructor (public name: string) {
        super();
        
        this.isInScene = false;
        this.autoInsert = true;
        this.objectManager = undefined;        
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
     * Link this object to object manager
     * @param objManager 
     */
    public setManager(objManager: ObjectManager): void {
        this.objectManager = objManager;
    }
    /**
     * @description
     * 
     * Inserts the 3d object in scene
     */
    public insertToScene(): void {
        if( !this.objectManager ) return;

        if( !this.isInScene) {
            this.isInScene = true;
            this.objectManager.scene.add(this);
        }
    }
    /**
     * Removes the 3d object from scene
     */
    public removeFromScene():  void {
        if( !this.objectManager ) return;
        if( this.isInScene ) {
            this.isInScene = false;
            this.objectManager.scene.remove(this);
        }
    }
    /**
     * @description
     * 
     * Called on destroy object
     */
    public onDestroy?:() => void;
    /**
     * @description
     * 
     * Delete the game object and call the destruction event
     */
    public destroy(): void {
        if( this.objectManager != undefined )
        {
            if(this.onDestroy)
                this.onDestroy();
            
            this.objectManager.remove(this);
        }
    }
    
    public update(delta: number): void {
        
    }
}