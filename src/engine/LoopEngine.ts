import {Clock} from 'three'
import {Engine} from './GameEngine'

export class LoopEngine {
    private clock: Clock;
    public deltaTime: number = 16;
    public currentTime: number = 0;
    private engine: Engine;

    constructor(engine: Engine){
        this.engine = engine;
        this.clock = new Clock(true);
    }

    run(): void {
        const update = () => 
        {
            requestAnimationFrame(update);
            const elapsedTime = this.clock.getElapsedTime();

            this.deltaTime = elapsedTime - this.currentTime;
            this.currentTime = elapsedTime;

            this.engine.update( this.deltaTime );
        }
        update();
    }
}