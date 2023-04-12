import { Object3D } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export class GameObjLoader {
    private loader: OBJLoader;

    constructor() {
        this.loader = new OBJLoader();
    }
    /**
     * @description
     * 
     * Loads a 3D model (.obj) from url
     * @param resourcePath 
     * @returns 
     */
    async load(resourcePath: string): Promise<Object3D> {
        let newObject: Object3D;
        newObject = new Object3D;
        newObject = await this.loader.loadAsync(resourcePath, function ( xhr ) {
        
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
        });
        return newObject;
    }
}


declare global {
    var loader: GameObjLoader;
}