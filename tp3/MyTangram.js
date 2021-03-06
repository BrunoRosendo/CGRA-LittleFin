import { CGFobject, CGFappearance } from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js"
import { MyTriangleSmall } from "./MyTriangleSmall.js";

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
  constructor(scene) {
    super(scene);
    this.initMaterials();
    this.init();
  }

  // material1 = new CGFappearance(this);
  // material1.setAmbient(1, 0, 0, 1.0);
  // material1.setDiffuse(0, 0, 0, 1.0);
  // material1.setSpecular(0, 0, 0, 1.0);
  // material1.setShininess(10.0);

  initMaterials() {

    //parallelogram (0.3 * 1.0, 1.0, 0.01, 1.0)
    this.materialParellelogram = new CGFappearance(this.scene);
    this.materialParellelogram.setAmbient(0.3 * 1.0, 0.3 * 1.0, 0.3 * 0.01, 1.0);
    this.materialParellelogram.setDiffuse(0.3 * 1.0, 0.3 * 1.0, 0.3 * 0.01, 1.0);
    this.materialParellelogram.setSpecular(0.3 * 1.0, 0.3 * 1.0, 0.3 * 0.01, 1.0);
    this.materialParellelogram.setShininess(1.0);


    //triangleUnder (0.3*0.71,0.3*0.32,0.3*0.80, 1.0)
    this.materialTriangleUnder = new CGFappearance(this.scene);
    this.materialTriangleUnder.setAmbient(0.3 * 0.71, 0.3 * 0.32, 0.3 * 0.80, 1.0);
    this.materialTriangleUnder.setDiffuse(0.3 * 0.71, 0.3 * 0.32, 0.3 * 0.80, 1.0);
    this.materialTriangleUnder.setSpecular(0.3 * 0.71, 0.3 * 0.32, 0.3 * 0.80, 1.0);
    this.materialTriangleUnder.setShininess(1.0);

    //triangleBesides 0.3*(1.0.3*00,0.0.3*14,0, 1.0)
    this.materialTriangleBesides = new CGFappearance(this.scene);
    this.materialTriangleBesides.setAmbient(0.3 * 1.00, 0.3 * 0.14, 0.3 * 0.0, 1.0);
    this.materialTriangleBesides.setDiffuse(0.3 * 1.00, 0.3 * 0.14, 0.3 * 0.0, 1.0);
    this.materialTriangleBesides.setSpecular(0.3 * 1.00, 0.3 * 0.14, 0.3 * 0.0, 1.0);
    this.materialTriangleBesides.setShininess(1.0);

    //mediumTriangle (0.3*0.93, 0.3*0.68, 0.3*0.93, 1.0)
    this.materialMediumTriangle = new CGFappearance(this.scene);
    this.materialMediumTriangle.setAmbient(0.3 * 0.93, 0.3 * 0.68, 0.3 * 0.93, 1.0);
    this.materialMediumTriangle.setDiffuse(0.3 * 0.93, 0.3 * 0.68, 0.3 * 0.93, 1.0);
    this.materialMediumTriangle.setSpecular(0.3 * 0.93, 0.3 * 0.68, 0.3 * 0.93, 1.0);
    this.materialMediumTriangle.setShininess(1.0);

    //square (0.3*0.29, 0.3*0.89, 0.3*0.05, 1.0)
    this.materialSquare = new CGFappearance(this.scene);
    this.materialSquare.setAmbient(0.3 * 0.29, 0.3 * 0.89, 0.3 * 0.05, 1.0);
    this.materialSquare.setDiffuse(0.3 * 0.29, 0.3 * 0.89, 0.3 * 0.05, 1.0);
    this.materialSquare.setSpecular(0.3 * 0.29, 0.3 * 0.89, 0.3 * 0.05, 1.0);
    this.materialSquare.setShininess(1.0);

    //bigTriangle (0.3*1.00, 0.3*0.54, 0.3*0.0, 1.0)
    this.materialBigTriangle = new CGFappearance(this.scene);
    this.materialBigTriangle.setAmbient(0.3 * 1.00, 0.3 * 0.54, 0.3 * 0.0, 1.0);
    this.materialBigTriangle.setDiffuse(0.3 * 1.00, 0.3 * 0.54, 0.3 * 0.0, 1.0);
    this.materialBigTriangle.setSpecular(0.3 * 1.00, 0.3 * 0.54, 0.3 * 0.0, 1.0);
    this.materialBigTriangle.setShininess(1.0);

    //roofTriangle (0.3*0.11, 0.3*0.53, 0.3*0.93, 1.0)
    this.materialRoofTriangle = new CGFappearance(this.scene);
    this.materialRoofTriangle.setAmbient(0.3 * 0.11, 0.3 * 0.53, 0.3 * 0.93, 1.0);
    this.materialRoofTriangle.setDiffuse(0.3 * 0.11, 0.3 * 0.53, 0.3 * 0.93, 1.0);
    this.materialRoofTriangle.setSpecular(0.3 * 0.11, 0.3 * 0.53, 0.3 * 0.93, 1.0);
    this.materialRoofTriangle.setShininess(1.0);


  }

  init() {
    this.parallelogram = new MyParallelogram(this.scene);
    this.triangleUnder = new MyTriangle(this.scene);
    this.square = new MyDiamond(this.scene);
    this.triangleBesides = new MyTriangle(this.scene);
    this.mediumTriangle = new MyTriangleSmall(this.scene);
    this.bigTriangle = new MyTriangle(this.scene);
    this.roofTriangle = new MyTriangleSmall(this.scene);
  }

  enableNormalViz() {
    this.parallelogram.enableNormalViz();
    this.triangleUnder.enableNormalViz();
    this.square.enableNormalViz();
    this.triangleBesides.enableNormalViz();
    this.mediumTriangle.enableNormalViz();
    this.bigTriangle.enableNormalViz();
    this.roofTriangle.enableNormalViz();
  }

  disableNormalViz() {
    this.parallelogram.disableNormalViz();
    this.triangleUnder.disableNormalViz();
    this.square.disableNormalViz();
    this.triangleBesides.disableNormalViz();
    this.mediumTriangle.disableNormalViz();
    this.bigTriangle.disableNormalViz();
    this.roofTriangle.disableNormalViz();
  }

  display() {

    // ---- BEGIN Transformation matrices section

    // Matrix definitions

    const matrixScale = [
      1 / Math.sqrt(2), 0, 0, 0,
      0, 1 / Math.sqrt(2), 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];

    const angle1 = -45 * Math.PI / 180;
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

    this.scene.multMatrix(matrixRotateZ);
    this.scene.multMatrix(matrixRotateX);
    this.scene.multMatrix(matrixScale);

    // ---- END Transformation matrices section

    // ---- BEGIN Primitive drawing section

    this.scene.scale(0.5, 0.5, 0.5);
    this.materialParellelogram.apply();
    this.parallelogram.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    // Small triangle under parallelogram
    this.scene.translate(0.5, -1.5, 0);
    this.scene.scale(0.5, 0.5, 1);

    this.materialTriangleUnder.apply();
    this.triangleUnder.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    // Square
    this.scene.translate(-0.5, -1.5, 0);

    this.scene.scale(1 / Math.sqrt(2), 1 / Math.sqrt(2), 1);

    const angSquare = 45 * Math.PI / 180;
    this.scene.rotate(angSquare, 0, 0, 1);

    // this.materialSquare.apply();
    this.scene.customMaterial.apply();
    this.square.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    // Small triangle besides the parallelogram
    this.scene.translate(-0.5, -0.5, 0);
    this.scene.scale(0.5, 0.5, 1);
    this.scene.rotate(Math.PI / 2, 0, 0, 1);

    this.materialTriangleBesides.apply();
    this.triangleBesides.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    // Medium triangle
    this.scene.translate(-1, 0, 0);
    this.scene.rotate(-Math.PI / 2, 0, 0, 1);

    this.materialMediumTriangle.apply();
    this.mediumTriangle.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    // Big Triangle
    this.scene.rotate(Math.PI, 0, 0, 1);

    this.materialBigTriangle.apply();
    this.bigTriangle.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    // Roof Triangle
    this.scene.translate(0, 1, 0);
    this.scene.scale(1.5, 1.5, 0);

    this.materialRoofTriangle.apply();
    this.roofTriangle.display();

    this.scene.popMatrix();
    this.scene.pushMatrix();

    // ---- END Primitive drawing section
  }
}