import { GRID_SIZE } from '../constants/GameConstants.js'
import { loadImage } from '../Utils'
import Sprite from './Sprite'

import Image from '../../images/buildings.png'

export default class House extends Sprite {
  constructor(game, coords=[0,0]){
    super(game, coords);

    this.startingResources = 15;
    this.resourceAmount = this.startingResources;
    this.moveCost = 0;

    this.width = (64/73)*GRID_SIZE;
    this.height = GRID_SIZE;

    this.image = [loadImage(Image),463,118,64,73,-GRID_SIZE/2,-GRID_SIZE/2,this.width,this.height]
  }

  draw(screen){
    super.draw(screen);
  }
  select(){
    super.select();
    console.log(this.constructor.name + " selected");
  }
}
