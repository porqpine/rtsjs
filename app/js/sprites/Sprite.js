import { GRID_SIZE } from '../constants/GameConstants.js'
import { intersects } from '../Utils'

export default class Sprite {
  image: undefined;
  game: undefined;
  beingPlaced: undefined;

  constructor(game, coords=[0,0]){
    this.game = game;
    this.pos = {
      x: coords[0],
      y: coords[1],
      centerPixelX: function(){
        return this.grid2draw(this.x) + GRID_SIZE/2;
      },
      centerPixelY: function(){
        return this.grid2draw(this.x) + GRID_SIZE/2;
      }
    };

    this.beingPlaced = false;

    this.color = "red";

    this.width = GRID_SIZE;
    this.height = GRID_SIZE;
    this.selected = false;

    this.speed = 0.2 + Math.random();

    this.dx = 1;
    this.dy = 1;

    this.moveQueue = [];

    this.moveCost = 0;
  }

  get targetX() {
      return this.gridPos[0]
  }
  get targetY() {
      return this.gridPos[1]
  }

  get gridPos(){
    return [this.pos.x,this.pos.y]
  }

  select(){
    this.selected = true;
  }

  unselect(){
    this.selected = false;
  }

  tick(){

  }

  get drawCoords() {
    return [this.grid2draw(this.pos.x),this.grid2draw(this.pos.y)];
  }

  drawSprite(screen, viewPort){
    if(viewPort.inView(this.pos)){

      screen.save();
      screen.translate(...this.drawCoords);
      if(this.beingPlaced){
        screen.globalAlpha = 0.5;
        this.drawGridCell(screen);
      }
      this.draw(screen);
      screen.globalAlpha = 1;
      screen.restore();
    }
  }

  get boundingBox() {
    return {
      left: this.pos.x,
      right: this.pos.x + 1,
      top: this.pos.y,
      bottom: this.pos.y + 1
    }
  }

  get isPlaceable(){
    var positionFree = this.game.positionFree([this.pos.x,this.pos.y], true);
    var affordable = this.game.canAfford(this.cost);
    var isInRange = this.game.isWithinBuildRange([this.pos.x,this.pos.y]);
    var collidesWithPlayer = intersects(this.game.player.boundingBox,this.boundingBox);
    return positionFree && affordable && isInRange && !collidesWithPlayer;
  }

  draw(screen){
    if(this.image) {
      screen.drawImage(...this.image);
    }else{
      screen.fillStyle = this.color;

      var centerX = GRID_SIZE/2;
      var centerY = GRID_SIZE/2;
      screen.fillRect(centerX - this.width/2,centerY - this.width/2 ,this.width,this.width);
    }
  }

  grid2draw(val){
    return val * GRID_SIZE;
  }

  setPosition(x,y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  drawGridCell(screen) {
    screen.fillStyle = this.isPlaceable ? "rgba(0,255,0,0.9" : "red";
    screen.fillRect(0,0,GRID_SIZE,GRID_SIZE);
  }
}
