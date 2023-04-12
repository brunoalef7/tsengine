import { GameObj } from "./GameObj";
import { Engine } from "../GameEngine";
import { GameEntity } from "../GameEntity";
import { Scene } from "three";

export class ObjectManager implements GameEntity {
    private objects: Array<GameObj>;
    public readonly scene: Scene;

    constructor(private engine: Engine) {
        this.objects = [];
        this.scene = engine.scene;
    }
    /**
     * @description
     * 
     * Find object by name
     * @param name object name
     * @returns object or null
     */
    getByName <T>(name: string): T {
        for (let index = 0; index < this.objects.length; index++) {
            const object = this.objects[index];
            
            if(object.name == name)
                return object as T;
        }
        return undefined as T;
    }
    /**
     * @description
     * 
     * Add a game object to scene
     * @param object 
     * @returns 
     */
    add(object: GameObj): boolean {
        this.objects.push(object);
        object.setManager(this);
        
        if( object.autoInsert )
            object.insertToScene();
        
        return true;
    }
    /**
     * @description
     * 
     * Add object to engine object manager
     * @param object Object to add to scene
     */
    remove(object: GameObj): void {
        const index = this.objects.indexOf(object);
        
        if(index >= 0)
        {
            object.removeFromScene();
            delete this.objects[index];
        }
    }
    /**
     * @description
     * 
     * Destroy a game object
     * @param name Game Object name
     */
    destroy(name: string): void {
        for (let index = 0; index < this.objects.length; index++) {
            const object = this.objects[index];
            
            if(object.name == name) {
                if( object.onDestroy )
                    object.onDestroy();

                object.removeFromScene();
                delete this.objects[index];
                break;
            }
        }
    }
    /**
     * @description
     * 
     * Update all objects
     * @param delta 
     */
    update(delta: number) {
        this.objects.forEach(object => {
            object.update(delta);
        });
    }
}