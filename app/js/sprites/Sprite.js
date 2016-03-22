import { GRID_SIZE } from '../constants/GameConstants.js'

export default class Sprite {

  constructor(game, coords=[0,0]){
    this.game = game;
    this.pos = {
      x: coords[0],
      y: coords[1],
      centerPixelX: function(){
        return this.x * GRID_SIZE + GRID_SIZE/2;
      },
      centerPixelY: function(){
        return this.y * GRID_SIZE + GRID_SIZE/2;
      }
    };

    this.color = "rgba(255,0,255,0.6)";

    this.width = GRID_SIZE;
    this.selected = false;

    this.speed = 0.2 + Math.random();

    this.dx = 1;
    this.dy = 1;


    this.targetX = this.pos.x;
    this.targetY = this.pos.y;

    this.moveQueue = [];

    this.moveCost = 0;
  }

  select(){
    this.selected = true;
  }

  unselect(){
    this.selected = false;
  }

  tick(){

  }

  drawSprite(screen, viewPort){
    if(viewPort.inView(this.pos)){
      this.draw(screen);
    }
  }

  draw(screen){
    screen.fillStyle = this.color;

    var centerX = this.pos.x * GRID_SIZE + GRID_SIZE/2;
    var centerY = this.pos.y * GRID_SIZE + GRID_SIZE/2;
    screen.fillRect(centerX - this.width/2,centerY - this.width/2 ,this.width,this.width);
  }

}
