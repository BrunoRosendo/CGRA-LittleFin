export class MyMovingObject {
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

    update() {
        this.position[0] += Math.sin(this.orientation) * this.velocity;
        this.position[2] += Math.cos(this.orientation) * this.velocity;
        if (this.position[2] < 0) this.position[2] = 0; // z position is limited
    }

    turn(val) {
        this.orientation += val;
    }

    accelerate(val) {
        this.velocity += val;
    }

    reset() {
        this.velocity = 0;
        this.position = [0, 0, 0];
        this.orientation = 0;
    }

    display() {
        this.update();
        // Animate based on user input
        this.scene.translate(...this.position);
        this.scene.rotate(this.orientation, 0, 1, 0);

        // Put the object in the right position. May change with the type of object
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.object.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
    }
}


