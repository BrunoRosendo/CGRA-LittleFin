import {CGFobject} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';

export class MyFish extends CGFobject{
    
    constructor(scene){
        super(scene);
        this.sphere = new MySphere(scene, 10, 10);
    }

    display(){
        this.sphere.display();
    }
}