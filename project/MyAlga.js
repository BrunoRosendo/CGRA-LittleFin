import { MyPyramid } from './MyPyramid.js'
import { CGFappearance } from '../lib/CGF.js';

export class MyAlgaePlant{

    constructor(scene){
        super(scene);
        this.alga = new MyPyramid(scene, 10, 10);
        initColor();
        initSize();
    }

    initColor(){
        this.devR = Math.random() * (1-0.57);
        this.devG = Math.random() * (1-0.87);
        this.devB = math.random() * (1-0.72);
        this.algaeAppearance = new CGFappearance(this.scene);
        this.algaeAppearance.setAmbient(0.57 + devR, 0.87 + devG, 0.72 + devB);
        this.algaeAppearance.setDiffuse(0.57 + devR, 0.87 + devG, 0.72 + devB);
        this.algaeAppearance.setSpecular(0.57 + devR, 0.87 + devG, 0.72 + devB);
        this.algaeAppearance.setEmission(0, 0, 0, 1);
        this.algaeAppearance.setShininess(5);
    }

    initSize(){
        this.height = Math.random() * 5 + 1;
        this.radius = Math.random() * 2 + 0.3;
    }

    display(){

        this.scale(this.radius, this.height, this.radius);
        this.algaeAppearance.apply();
        this.alga.display();
        this.popMatrix();
        this.pushMatrix();
    }
}