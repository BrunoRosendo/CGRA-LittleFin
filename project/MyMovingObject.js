import { norm3d, rotate3dByAxis } from './utilities/vector.js';
/**
* MyPyramid
* @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of divisions around the Y axis
 * @param stacks - number of divisions along the Y axis
*/
export class MyMovingObject {
    constructor(scene, object) {
        this.scene = scene;
        this.object = object;

        this.velocity = 0;
        this.position = [0, 0, 0];
        this.orientation = 0
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

    update(sceneSpeed) {
        this.position += this.orientation / norm3d(this.orientation) * this.velocity;
        //division by norm grants unitary vector of orientation
    }

    changeOrientation(angle) {
        this.orientation += angle;
        //see how this will work
    }

    changeVelocity(change) {
        this.velocity += change;
    }

    display() {
        this.scene.translate(...this.position);
        this.scene.rotate(this.orientation, 0, 1, 0);

        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI / 2, 1, 0, 0)
        this.object.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
    }
}


