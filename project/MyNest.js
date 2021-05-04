import { CGFobject } from '../lib/CGF.js';
import { MyRockSet } from './MyRockSet.js';

export class MyNest extends CGFobject {
    // This nest is still very basic [FIX]
    constructor(scene, radius, posX, posZ) {
        super(scene);
        this.posX = posX;
        this.posZ = posZ;
        this.rockset = new MyRockSet(scene, 500, radius);
    }

    display() {
        this.scene.translate(this.posX, 0, this.posZ);

        this.rockset.display();

        this.scene.popMatrix();
        this.scene.translate(-this.posX, 0, -this.posZ);
        this.scene.pushMatrix();
    }
}
