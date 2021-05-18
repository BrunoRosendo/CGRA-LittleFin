import { MyFish } from "./MyFish.js";

export class MyAnimatedFish extends MyFish {
    constructor(scene, centerX, centerZ, period, color, ratio, texture) {
        super(scene, color, texture, ratio);
        this.centerX = centerX;
        this.centerZ = centerZ;
        this.angVel = 2 * Math.PI / period;
        this.period = period;

        this.ang = 0;
        this.radius = 5;
    }

    update(t) {
        if (!this.lastTime) {
            this.lastTime = t;
        }
        let diff = t - this.lastTime;
        this.ang += diff / 1000 * this.angVel;
        let v = 2 * Math.PI * this.radius * diff / 1000/ this.period;
        if (this.ang > 2 * Math.PI) {
            this.ang -= 2 * Math.PI;
        }
        this.getPos();
        super.update(t, v, false, true);
        this.lastTime = t;
    }

    getPos() {
        this.posX = this.centerX + Math.cos(this.ang) * this.radius;
        this.posZ = this.centerZ + Math.sin(this.ang) * this.radius;
    }
    display() {
        this.scene.translate(this.posX, 0, this.posZ);
        this.scene.rotate(-this.ang, 0, 1, 0);
        this.scene.translate(0,2,0);
        super.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
    }
}
