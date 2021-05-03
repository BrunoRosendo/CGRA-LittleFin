import {CGFappearance} from '../lib/CGF.js';
import { MyCylinder } from "./MyCylinder.js";

export class MyPier {
    constructor(scene) {
        this.scene = scene;
        this.cyllinder = new MyCylinder(scene, 20);
        this.width = 10;
        this.length = 20;
        this.height = 10;
        this.xPosition = -5;
        this.yPosition = -20;
        this.zPosition = -20;

        this.material = new CGFappearance(scene);
        this.material.setAmbient(1.0, 1.0, 1.0, 1.0);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.material.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.material.setShininess(5);
        this.material.loadTexture('./images/earth.jpg');
    }

    display() {
        this.material.apply();
        this.scene.translate(this.xPosition, this.yPosition, this.zPosition);
        this.scene.pushMatrix();

        //FrontRight
        this.scene.translate(this.width/2,0,this.length/2);
        this.scene.scale(1,this.height,1);
        this.cyllinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        //BackRight
        this.scene.translate(this.width/2,0,-this.length/2);
        this.scene.scale(1,this.height,1);
        this.cyllinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        //FrontLeft
        this.scene.translate(-this.width/2,0,this.length/2);
        this.scene.scale(1,this.height,1);
        this.cyllinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();

        //BackLeft
        this.scene.translate(-this.width/2,0,-this.length/2);
        this.scene.scale(1,this.height,1);
        this.cyllinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
    }
}