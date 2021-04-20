import {CGFobject} from '../lib/CGF.js';
import {CGFappearance} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';
import { MyTriangle } from './MyTriangle.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';

export class MyFish extends CGFobject{
    
    constructor(scene){
        super(scene);
        this.sphere = new MySphere(scene, 10, 10);
        this.tail = new MyTriangle(scene);
        this.mohawk = new MyTriangle(scene);
        this.finLeft = new MyTriangleSmall(scene);
        this.finRight = new MyTriangleSmall(scene);
        this.leftEye = new MySphere(scene, 5, 5);
        this.rightEye = new MySphere(scene, 5, 5);

        

        this.defaultAppearance = new CGFappearance(this.scene);
        this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0, 0, 0, 1);
        this.defaultAppearance.setShininess(120);
    }

    display(){
        //sphere
        this.scene.scale(0.8,0.8,1);
        this.sphere.display();


        //tail
        this.scene.translate(0,0,-1.7);
        this.scene.rotate(-Math.PI/4, 1, 0, 0)
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.6,0.6,.6);
        this.tail.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.defaultAppearance.apply();


        //left fin
        this.scene.translate(0.85, -0.4, -0.2);
        this.scene.rotate(Math.PI/6, 0, 0 , 1);
        this.scene.rotate(3*Math.PI/4, 1, 0, 0)
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5,0.5,.5);
        this.finLeft.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        //right fin
        this.scene.translate(-0.85, -0.4, -0.2);
        this.scene.rotate(-Math.PI/6, 0, 0 , 1);
        this.scene.rotate(3*Math.PI/4, 1, 0, 0)
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5,0.5,.5);
        this.finRight.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

        //mohawk
        this.scene.translate(0,1,0);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.scene.scale(0.3,0.3,0.3);
        this.mohawk.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0.7, 0.1,.3);
        this.scene.scale(0.15,0.15,0.15);
        this.leftEye.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

        
        this.scene.translate(-0.7,0.1,.3);
        this.scene.scale(0.15,0.15,0.15);
        this.rightEye.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

    }
}