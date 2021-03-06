import { GRID_SIZE, LAYERS } from '../../constants/GameConstants.js'
import { loadImage } from '../../Utils'

import Resource from './Resource'
import TreeStump from './../decore/TreeStump'

import Image from '../../../images/trees2.png'
import GatheringSound from '../../../sound/woodchop.mp3'

const VARIANTS = [
  {x: 385, y:14, w:86, h:143, cX:0, cY:GRID_SIZE-65},
  {x: 515, y:332, w:53, h:88, cX:0, cY:GRID_SIZE-65},
  {x: 268, y:14, w:93, h:153, cX:0, cY:GRID_SIZE-65},
  {x: 547, y:139, w:103, h:172, cX:0, cY:GRID_SIZE-65},
  {x: 27, y:281, w:101, h:168, cX:0, cY:GRID_SIZE-65},
  {x: 353, y:311, w:57, h:95, cX:0, cY:GRID_SIZE-65},
  {x: 155, y:145, w:87, h:145, cX:0, cY:GRID_SIZE-65}
];

export default class Tree extends Resource {

  constructor(game, coords=[0,0]){
    super(game, coords, "wood", 15, 3);
    this.moveCost = 10000;

    this.color = "rgba(0,150,0,0.5)";

    this.variant = VARIANTS[parseInt(Math.random()*VARIANTS.length)];
    this.image = [
      loadImage(Image),
      this.variant.x,this.variant.y,this.variant.w,this.variant.h,
      (GRID_SIZE/2)-(40/2),GRID_SIZE-65,40,65
    ];

    this.gatheringSound = new Audio(GatheringSound);
  }

  deplete() {
    super.deplete();
    this.game.addSprite(LAYERS.LAYER_FLOOR_DECORE, new TreeStump(this.game, this.gridInfo.pos))
  }

}
