import { CGFscene, CGFcamera, CGFaxis } from "../lib/CGF.js";
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js"
import { MyTriangleBig } from "./MyTriangleBig.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.parallelogram = new MyParallelogram(this);
    this.triangleUnder = new MyTriangle(this);
    this.square = new MyDiamond(this);
    this.triangleBesides = new MyTriangle(this);
    this.mediumTriangle = new MyTriangleSmall(this);
    this.bigTriangle = new MyTriangle(this);
    this.roofTriangle = new MyTriangleSmall(this);

    //Objects connected to MyInterface
    this.displayAxis = true;
    this.scaleFactor = 1;
  }
  initLights() {
    this.lights[0].setPosition(15, 2, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
  }
  initCameras() {
    this.camera = new CGFcamera(
      0.4,
      0.1,
      500,
      vec3.fromValues(15, 15, 15),
      vec3.fromValues(0, 0, 0)
    );
  }
  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }
  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    this.setDefaultAppearance();

    var sca = [
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      this.scaleFactor,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
    ];

    this.multMatrix(sca);
    this.pushMatrix();

    // ---- BEGIN Transformation matrices section

    // Matrix definitions

    const matrixTranslate = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0.5, -1, 0, 1
    ];

    const matrixScale = [
      1/Math.sqrt(2), 0, 0, 0,
      0, 1/Math.sqrt(2), 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];

    const angle1 = -45*Math.PI/180;
    const matrixRotateZ = [
      Math.cos(angle1), Math.sin(angle1), 0, 0,
      -Math.sin(angle1), Math.cos(angle1), 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];

    const matrixRotateX = [
      1, 0, 0, 0,
      0, Math.cos(Math.PI), Math.sin(Math.PI), 0,
      0, -Math.sin(Math.PI), Math.cos(Math.PI), 0,
      0, 0, 0, 1
    ];

    // Transformations (by reversed order)

    this.multMatrix(matrixRotateZ);
    this.multMatrix(matrixRotateX);
    this.multMatrix(matrixScale);

    // ---- END Transformation matrices section

    // ---- BEGIN Primitive drawing section

    this.parallelogram.display();

    this.popMatrix();
    this.pushMatrix();

    // Small triangle under parallelogram
    this.translate(0.5, -1.5, 0);
    this.scale(0.5, 0.5, 1);

    this.triangleUnder.display();

    this.popMatrix();
    this.pushMatrix();

    // Square
    this.translate(-0.5, -1.5, 0);

    this.scale(1/Math.sqrt(2), 1/Math.sqrt(2), 1);

    const angSquare = 45*Math.PI/180;
    this.rotate(angSquare, 0, 0, 1);

    this.square.display();

    this.popMatrix();
    this.pushMatrix();

    // Small triangle besides the parallelogram
    this.translate(-0.5, -0.5, 0);
    this.scale(0.5, 0.5, 1);
    this.rotate(Math.PI/2, 0, 0, 1);

    this.triangleBesides.display();

    this.popMatrix();
    this.pushMatrix();

    // Medium triangle
    this.translate(-1, 0, 0);
    this.rotate(-Math.PI/2, 0, 0, 1);

    this.mediumTriangle.display();

    this.popMatrix();
    this.pushMatrix();

    // Big Triangle
    this.rotate(Math.PI, 0, 0, 1);

    this.bigTriangle.display();

    this.popMatrix();
    this.pushMatrix();

    // Roof Triangle
    this.translate(0, 1, 0);
    this.scale(1.5, 1.5, 0);

    this.roofTriangle.display();

    this.popMatrix();
    this.pushMatrix();

    // ---- END Primitive drawing section
  }
}
