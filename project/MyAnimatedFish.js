import { MyFish } from "./MyFish.js";

export class MyAnimatedFish extends MyFish{
    constructor(scene, centerX, centerY, period, color=null, ratio=null, texture=null){
        super(scene, color, texture, ratio);
        this.centerX = centerX;
        this.centerY = centerY;
        this.period = period;
    }   

}