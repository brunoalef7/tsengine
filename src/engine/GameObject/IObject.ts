import { GameEntity } from "../GameEntity";

/*
* @description
* 
*/
export interface IObject extends GameEntity {
    /**
    * @description
    * 
    * Method called before the frame update
    */
    beforeUpdate?: () => void;

    /**
    * @description
    * 
    * Method called after frame update
    */
   afterUpdate?: () =>  void;
   /**
    * @description
    * 
    * Method called once after create the game object
    */
   onCreate?: () => void;
   /**
    * @description
    * 
    * Method called before destroy the object
    */
   onDestroy?: () => void;

   insertToScene: () => void;
   removeFromScene: () => void;
   
   destroy: () => void;
}