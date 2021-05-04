import { MyAlga } from './MyAlga.js';

export class MyAlgaeFormation {

    static maxAlgae = 10;
    static maxRadius = 2;
    constructor(scene, pos) {
        this.scene = scene;
        this.pos = pos;
        initAlgae();
    }

    initAlgae() {
        noAlgae = Math.floor(Math.random() * maxAlgae) + 1;

        this.algae = [];
        this.algaePos = [];
        for (i = 0; i < noAlgae; i++) {
            this.algae.push(new MyAlga(this.scene));
            radius = Math.random() * maxRadius;
            angle = Math.random() * 2*Math.PI;
            this.algaePos.push([radius*Math.cos(angle), radius*Math.sin(angle)]);
        }
    }

    display(){
        this.scene.translate(...this.pos);
        this.scene.pushMatrix();
        for(i = 0; i < noAlgae; i++){
            alga = this.algae[i];
            algaPos = this.algaePos[i];
            this.scene.translate(algaPos[0], 0, algaPos[1]);
            this.alga.display();
            this.scene.popMatrix();
            this.scene.pusMatrix()
        }

        this.scene.popMatrix();
    }

}