import {CGFobject} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';
import { MyTriangle } from './MyTriangle.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';

export class MyFish extends CGFobject{
    
    constructor(scene){
        super(scene);
        this.sphere = new MySphere(scene, 10, 10);
        this.tail = new MyTriangle(scene);
        this.finLeft = new MyTriangleSmall(scene);
        this.finRight = new MyTriangleSmall(scene);
    }

    display(){
        this.sphere.display();

        this.scene.translate(0,0,-1.9);
        this.scene.rotate(-Math.PI/4, 1, 0, 0)
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.7,0.7,.7);
        this.tail.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(1, -0.4, 0);
        this.scene.rotate(Math.PI/6, 0, 0 , 1);
        this.scene.rotate(3*Math.PI/4, 1, 0, 0)
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5,0.5,.5);
        this.finLeft.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(-1, -0.4, 0);
        this.scene.rotate(-Math.PI/6, 0, 0 , 1);
        this.scene.rotate(3*Math.PI/4, 1, 0, 0)
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5,0.5,.5);
        this.finRight.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

    }
}