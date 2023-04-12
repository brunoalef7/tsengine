import { Engine } from "./Engine";
import { GameEntity } from "./GameEntity";

export class ObjectEngine implements GameEntity {
    private engine: Engine;
    private objects: Array<number>;

    constructor(engine: Engine) {
        this.engine = engine;
        this.objects = [];
    }

    update(delta: number) {

    }
}