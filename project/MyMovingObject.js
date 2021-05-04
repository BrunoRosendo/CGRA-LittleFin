// TODO: MY MOVING FISH SHOULD BE A SUBCLASS OF MYMOVINGOBJECT

export class MyMovingObject {

    minHeight = 1;
    maxHeight = 8;

    constructor(scene, object) {
        this.scene = scene;
        this.object = object;
        this.reset();
    }
    initBuffers() {
        this.object.initBuffers();
    }
    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
     */
    updateBuffers(complexity) {
        this.object.updateBuffers(complexity);
    }

    update(t) {
        this.position[0] += this.scene.speedFactor * Math.sin(this.orientation) * this.velocity;
        this.position[1] += this.scene.speedFactor * this.verticalVelocity;
        if (this.position[1] < this.minHeight) {
            this.position[1] = this.minHeight;
        }
        if (this.position[1] > this.maxHeight) {
            this.position[1] = this.maxHeight;
        }
        this.position[2] += this.scene.speedFactor * Math.cos(this.orientation) * this.velocity;

        this.object.update(t);
    }

    turn(val) {
        this.orientation += val;
    }

    accelerate(val) {
        this.velocity += val;
    }

    ascend() {
        this.verticalVelocity = this.maxHeight / 100;
    }

    descend() {
        this.verticalVelocity = -this.maxHeight / 100;
    }

    reset() {
        this.velocity = 0;
        this.verticalVelocity = 0;
        this.position = [0, this.maxHeight / 2, 0];
        this.orientation = 0;
    }

    isOnLowerLimit() {
        return this.position[1] === this.minHeight;
    }

    display() {
        // Animate based on user input
        this.scene.translate(...this.position);
        this.scene.rotate(this.orientation, 0, 1, 0);

        this.object.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
    }
}
