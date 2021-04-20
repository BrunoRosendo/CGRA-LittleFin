import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture, CGFshader } from "../lib/CGF.js";
import { MyMovingObject } from "./MyMovingObject.js"
import { MyPyramid } from "./MyPyramid.js";
import { MySphere } from "./MySphere.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { MyCylinder } from "./MyCylinder.js";
import { MyFish } from "./MyFish.js";

/**
 * getStringFromUrl(url)
 * Function to load a text file from a URL (used to display shader sources)
 */

function getStringFromUrl(url) {
	var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", url, false);
    xmlHttpReq.send();
    return xmlHttpReq.responseText;
}

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
        this.initShaders();

        // Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);

        this.enableTextures(true);

        // MyCubeMap textures
        this.skyTextures = [
            new CGFtexture(this, './images/demo_cubemap/top.png'),
            new CGFtexture(this, './images/demo_cubemap/front.png'),
            new CGFtexture(this, './images/demo_cubemap/right.png'),
            new CGFtexture(this, './images/demo_cubemap/back.png'),
            new CGFtexture(this, './images/demo_cubemap/left.png'),
            new CGFtexture(this, './images/demo_cubemap/bottom.png')
        ];

        this.mountainTextures = [
            new CGFtexture(this, './images/mountain_cubemap/top.png'),
            new CGFtexture(this, './images/mountain_cubemap/front.png'),
            new CGFtexture(this, './images/mountain_cubemap/right.png'),
            new CGFtexture(this, './images/mountain_cubemap/back.png'),
            new CGFtexture(this, './images/mountain_cubemap/left.png'),
            new CGFtexture(this, './images/mountain_cubemap/bottom.png')
        ];

        this.coordTextures = [
            new CGFtexture(this, './images/test_cubemap/py.png'),
            new CGFtexture(this, './images/test_cubemap/nz.png'),
            new CGFtexture(this, './images/test_cubemap/px.png'),
            new CGFtexture(this, './images/test_cubemap/pz.png'),
            new CGFtexture(this, './images/test_cubemap/nx.png'),
            new CGFtexture(this, './images/test_cubemap/ny.png')
        ];

        this.cubeMaptextures = [this.coordTextures, this.skyTextures, this.mountainTextures];
        this.selectedTexture = 1;
        this.textureIds = { 'Coords': 0, 'Sky': 1, 'Mountain': 2 };

        this.scaleFactor = 1.0;
        this.speedFactor = 1.0;

        // Initialize scene objects
        this.axis = new CGFaxis(this);
        this.pyramid = new MyMovingObject(this, new MyPyramid(this, 10, 3));
        this.mycubemap = new MyCubeMap(this, this.cubeMaptextures[this.selectedTexture]);
        this.sphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this, 12);
        this.fish = new MyFish(this);


        this.defaultAppearance = new CGFappearance(this);
        this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0, 0, 0, 1);
        this.defaultAppearance.setShininess(120);


        this.pyramidAppearance = new CGFappearance(this);
        this.pyramidAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.pyramidAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.pyramidAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.pyramidAppearance.setShininess(120);

        this.sphereAppearance = new CGFappearance(this);
        this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.sphereAppearance.setShininess(120);
        this.sphereAppearance.loadTexture('./images/earth.jpg');

        this.cylinderAppearance = new CGFappearance(this);
        this.cylinderAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.cylinderAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.cylinderAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.cylinderAppearance.setShininess(120);
        this.cylinderAppearance.loadTexture('./images/earth.jpg');


        // Objects connected to MyInterface
        this.displayAxis = true;
        this.displayPyramid = false;
        this.displayMyCubeMap = true;
        this.displaySphere = false;
        this.displayCylinder = false;
        this.displayFish = true;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setAmbient(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }

    initShaders() {
        this.fishShader = new CGFshader(this.gl, "shaders/fish.vert", "shaders/fish.frag");

        // // Add shaders to the html page        
        // this.vShaderDiv = document.getElementById("vshader");
        // this.fShaderDiv = document.getElementById("fshader");
        // this.vShaderDiv.innerHTML = "<xmp>" + getStringFromUrl(this.fishShader.vertexURL) + "</xmp>";
        // this.fShaderDiv.innerHTML = "<xmp>" + getStringFromUrl(this.fishShader.fragURL) + "</xmp>";
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0, 0, 0, 1);
        this.setShininess(10.0);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t) {
        t = t * this.speedFactor;
        this.checkKeys();
    }

    updateMyCubeMapTexture() {
        this.mycubemap.updateAppliedTexture(this.cubeMaptextures[this.selectedTexture]);
    }

    checkKeys() {
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            if (this.displayPyramid)
                this.pyramid.accelerate(0.005);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            if (this.displayPyramid)
                this.pyramid.accelerate(-0.005);
        }

        if (this.gui.isKeyPressed("KeyA")) {
            if (this.displayPyramid)
                this.pyramid.turn(0.1);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            if (this.displayPyramid)
                this.pyramid.turn(-0.1);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            if (this.displayPyramid)
                this.pyramid.reset();
        }

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
        this.pushMatrix();


        this.defaultAppearance.apply();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        if (this.displayMyCubeMap) {
            this.translate(this.camera.position[0], this.camera.position[1], this.camera.position[2]);
            this.scale(500, 500, 500);
            this.mycubemap.display();
        }

        this.loadIdentity();
        this.applyViewMatrix();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.pushMatrix();

        // ---- BEGIN Primitive drawing section
        if (this.displayPyramid) {
            this.pyramidAppearance.apply();
            this.pyramid.display();
        }

        // This sphere does not have defined texture coordinates
        if (this.displaySphere) {
            this.sphereAppearance.apply();
            this.sphere.display();
        }

        if (this.displayCylinder) {
            this.cylinderAppearance.apply();
            this.cylinder.display();
        }

        if (this.displayFish) {
            this.translate(0, 3, 0);
            this.fish.display();
        }


        // ---- END Primitive drawing section
    }
}