import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MySphere } from './MySphere.js';
import { MyTriangle } from './MyTriangle.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';

export class MyFish extends CGFobject {
    
    constructor(scene){
        super(scene);
        this.init();
    }

    init() {
        this.sphere = new MySphere(this.scene, 10, 10);
        this.tail = new MyTriangle(this.scene);
        this.mohawk = new MyTriangle(this.scene);
        this.finLeft = new MyTriangleSmall(this.scene);
        this.finRight = new MyTriangleSmall(this.scene);
        this.leftEye = new MySphere(this.scene, 5, 5);
        this.rightEye = new MySphere(this.scene, 5, 5);

        this.defaultAppearance = new CGFappearance(this.scene);
        this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0, 0, 0, 1);
        this.defaultAppearance.setShininess(120);
    }

    display(){
        // Sphere
        this.scene.scale(0.8,0.8,1.15);
        this.sphere.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        // Tail
        this.scene.translate(0,0,-1.93);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.scale(0.6,0.6,.6);
        this.tail.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.defaultAppearance.apply();

        // Left Fin
        this.scene.translate(0.9, -0.4, -0.2);
        this.scene.rotate(Math.PI/6, 0, 0 , 1);
        this.scene.rotate(3*Math.PI/4, 1, 0, 0)
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5,0.5,.5);
        this.finLeft.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        // Right Fin
        this.scene.translate(-0.9, -0.4, -0.2);
        this.scene.rotate(-Math.PI/6, 0, 0 , 1);
        this.scene.rotate(3*Math.PI/4, 1, 0, 0)
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.scale(0.5,0.5,.5);
        this.finRight.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // Mohawk
        this.scene.translate(0,1.05,0);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.scene.scale(0.3,0.3,0.3);
        this.mohawk.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // Left Eye
        this.scene.translate(0.7, 0.1,.3);
        this.scene.scale(0.15,0.15,0.15);
        this.leftEye.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

        // Right Eye
        this.scene.translate(-0.7,0.1,.3);
        this.scene.scale(0.15,0.15,0.15);
        this.rightEye.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();
    }
}