import { GRID_SIZE } from '../constants/GameConstants.js'
import Sprite from './Sprite'

import Image from '../../images/grass.jpg'
import { loadImage } from '../Utils'
export default class Grass extends Sprite {
  constructor(game,coords=[0,0]){
    super(game, coords);
    this.width = GRID_SIZE;
    this.color = "black";

    this.image = loadImage(Image);
  }

  draw(screen){

    //screen.drawImage(this.image,this.grid2draw(this.pos.x)-GRID_SIZE/2,this.grid2draw(this.pos.y)-GRID_SIZE/2,GRID_SIZE,GRID_SIZE)
    screen.drawImage(
      this.image,
      this.grid2draw(this.pos.x)-GRID_SIZE/2,this.grid2draw(this.pos.y)-GRID_SIZE/2,
      this.width,this.width
    )
  }
}
