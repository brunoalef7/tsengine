import * as THREE from 'three';
import { Square } from '../game/objects/primitive/square'
import {Engine} from '../engine/GameEngine'
import { GameObj3D } from '../engine/GameObject/GameObj3D';

class Game extends Engine {
  static game = new Game();
  constructor() {
    super( window.innerWidth, window.innerHeight );
  }
  /**
   * Create some square objects 
   */
  createObjects() {
    var square = new Square("square1");
    this.objectManager.add(square);

    square = new Square("square2");
    square.setPosition(-3, 0, 0);
    square.setColor(0xf0b00f);
    this.objectManager.add(square);

    square = new Square("square3");
    square.setPosition(6, 0, 0);
    square.setColor(0xf0b00f);
    this.objectManager.add(square);

    this.loader.load('./game/assets/tree.obj').then((obj) => {       
      var obj3d = new GameObj3D( "tree");
      obj3d.create(obj);
      obj3d.setPosition(-1.0, -20.0, -18);
      obj3d.setColor(0xf0b00f);
      this.objectManager.add(obj3d);
    });

    console.log("Create square objects");
  }
  /**
   * @description
   * 
   * Runs the game engine
   */
  run() {
    console.log("Start game engine");
    this.createObjects();
    this.start();
  }
}

Game.game.run();