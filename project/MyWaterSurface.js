import { CGFappearance, CGFtexture, CGFshader, CGFobject } from "../lib/CGF.js";
import { MyPlane } from "../tp5/MyPlane.js";


export class MyWaterSurface extends CGFobject{
    constructor(scene){
        super(scene);
        this.waterSurf = new MyPlane(scene, 50);
        this.scene = scene;
        
        this.waterShader = new CGFshader(this.scene.gl, "shaders/water.vert", "shaders/water.frag");
        this.waterShader.setUniformsValues({ timeFactor: 0, uSampler2: 1, distortionScale: 0.3 });
        this.waterTexture = new CGFtexture(this.scene, './images/underwater/pier.jpg');
        this.waterDistortionTexture = new CGFtexture(this.scene, './images/underwater/distortionmap.png');

        this.materials = new CGFappearance(this);
        this.materials.setAmbient(1.0,1.0,1.0,1.0);
        this.materials.setDiffuse(1.0,1.0,1.0,1.0);
        this.materials.setSpecular(1.0,1.0,1.0,1.0);
        this.materials.setShininess(120);
    }

    update(t){
        this.waterShader.setUniformsValues({timeFactor: t % 200000});
    }

    display(){    
        this.scene.setActiveShader(this.waterShader);
        this.waterTexture.bind();
        this.waterDistortionTexture.bind(1);
        this.waterSurf.display();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}