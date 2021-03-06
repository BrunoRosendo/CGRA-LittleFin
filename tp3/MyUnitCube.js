import { CGFobject } from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [
            //front face 
            -0.5, -0.5, 0.5, //0
            0.5, -0.5, 0.5, //1
            0.5, 0.5, 0.5, //2
            -0.5, 0.5, 0.5, //3

            //left face
            -0.5, -0.5, 0.5, //4
            -0.5, 0.5, 0.5, //5
            -0.5, 0.5, -0.5, //6
            -0.5, -0.5, -0.5, //7

            //back face
            -0.5, -0.5, -0.5, //8
            -0.5, 0.5, -0.5, //9
            0.5, 0.5, -0.5, //10
            0.5, -0.5, -0.5, //11

            //right face
            0.5, -0.5, -0.5, //12
            0.5, 0.5, -0.5, //13
            0.5, 0.5, 0.5, //14
            0.5, -0.5, 0.5, //15

            //top face
            0.5, 0.5, 0.5, //16
            0.5, 0.5, -0.5, //17
            -0.5, 0.5, -0.5, //18
            -0.5, 0.5, 0.5, //19

            //bottom face
            0.5, -0.5, 0.5, //20
            -0.5, -0.5, 0.5, //21
            -0.5, -0.5, -0.5, //22
            0.5, -0.5, -0.5 // 23

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            //front face
            0,1,2,
            0,2,3,

            //left face
            4,5,6,
            4,6,7,

            //back face
            8,9,10,
            8,10,11,

            //right face
            12,13,14,
            12,14,15,

            //top face
            16,17,18,
            16,18,19,

            //bottom face
            20,21,22,
            20,22,23,
        ];

        this.normals = [

            //front face
            0,0,1, //0
            0,0,1, //1
            0,0,1, //2
            0,0,1, //3

            //left face
            -1,0,0, //4
            -1,0,0, //5
            -1,0,0, //6
            -1,0,0, //7

            //back face
            0,0,-1, //8
            0,0,-1, //9
            0,0,-1, //10
            0,0,-1, //11

            //right face
            1,0,0, //12
            1,0,0, //13
            1,0,0, //14
            1,0,0, //15

            //top face
            0,1,0, //16
            0,1,0, //17
            0,1,0, //18
            0,1,0, //19

            //bottom face
            0,-1,0, //20
            0,-1,0, //21
            0,-1,0, //22
            0,-1,0, //23
        ]

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

