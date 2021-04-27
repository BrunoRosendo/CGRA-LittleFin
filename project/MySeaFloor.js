import {CGFobject, CGFshader, CGFappearance, CGFtexture} from '../lib/CGF.js';
import {MyPlane} from './MyPlane.js';
/**
* MyPlane
* @constructor
 * @param scene - Reference to MyScene object
 * @param numDiv - number of divisions in the plane
 * @param size - size of the floor
 * @param maxHeight - max height of the floor
 * @param offset - height offset
*/
export class MySeaFloor extends CGFobject {
	constructor(scene, numDiv, size, maxHeight, offset) {
		super(scene);
		this.size = size;
        this.maxHeight = maxHeight;
        this.offset = offset;

        this.plane = new MyPlane(this.scene, numDiv);

        this.shader = new CGFshader(this.scene.gl, "shaders/seaFloor.vert", "shaders/seaFloor.frag");
        this.shader.setUniformsValues({ uSampler2: 1 });

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(1.0, 1.0, 1.0, 1);
        this.material.setDiffuse(1.0, 1.0, 1.0, 1);
        this.material.setSpecular(1.0, 1.0, 1.0, 1);
        this.material.setShininess(120);
        this.material.loadTexture('./images/underwater/sand.png');

        this.filter = new CGFtexture(this.scene, "./images/underwater/sandMap.png");
	}

    display() {
        this.scene.scale(this.size, 1.0, this.size);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);

        this.material.apply();
        this.filter.bind(1);

        this.scene.setActiveShader(this.shader);
        this.plane.display();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
        this.scene.pushMatrix();
    }
}
