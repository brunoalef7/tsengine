import { GameObj } from "../../../engine/GameObject/GameObj";
import { MeshBasicMaterial, PlaneGeometry, Color, Mesh, DoubleSide } from 'three'

export class Square extends GameObj {
    public animation: boolean;
    public colorization: boolean;
    private mesh: Mesh;

    constructor(name: string)
    {
        super(name);

        this.geometry = new PlaneGeometry(2, 2);
        this.material = new MeshBasicMaterial({ color: 0xf0ff00, side: DoubleSide });
        this.mesh = new Mesh(this.geometry, this.material);
        this.add(this.mesh);

        this.position.x = 1;

        this.animation = true;
        this.colorization = true;
    }
    /**
     * 
     * @param color 
     */
    public setColor(color: number) : void {
        this.material.color.setHex(color);
    }
    /**
     * @description
     * 
     * Simple method to change the material color
     */
    private colorize(): void {
        if(this.material.color.r < 0.01)
            this.material.color.r = 0.8;
        else if(this.material.color.r >= 1.0)
            this.material.color.r = 0.01;
        else
            this.material.color.r += 0.001;
        
        if(this.material.color.g < 0.01)
            this.material.color.g = 0.8;
        else if(this.material.color.g >= 1.0)
            this.material.color.g = 0.01;
        else
            this.material.color.g += 0.01;

        if(this.material.color.b < 0.01)
            this.material.color.b = 1.0;
        else if(this.material.color.b >= 1.0)
            this.material.color.b = 0.01;
        else
            this.material.color.b += 0.01;
    }
    /**
     * @description
     * 
     * Simple method to animate the square object
     */
    private animate(): void {        
        this.rotation.x += 0.01;
        this.rotation.y += 0.01;
    }

    update(delta: number): void {
        super.update(delta);
        this.animate();
        this.colorize();        
    }
}