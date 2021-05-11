import { MyAlgaeFormation } from './MyAlgaeFormation.js';

export class MyFlora {
    static minX = -25;
    static maxX = 25;
    static minZ = -25;
    static maxZ = 25;
    static minY = 2;
    static maxY = this.minY + 1;
    constructor(scene, noFormations) {
        this.scene = scene;
        this.noFormations = noFormations;
        this.formations = this.initFormations(noFormations);
    }

    initFormations(noFormations) {
        let formations = [];
        for (let i = 0; i < noFormations; i++) {
            let x = Math.floor(Math.random() * (MyFlora.maxX - MyFlora.minX) + MyFlora.minX);
            let y = Math.floor(Math.random() * (MyFlora.maxY - MyFlora.minY) + MyFlora.minY);
            let z = Math.floor(Math.random() * (MyFlora.maxZ - MyFlora.minZ) + MyFlora.minZ);
            formations.push(new MyAlgaeFormation(this.scene, [x,y,z]));
        }
        return formations;
    }

    display(){
        this.formations.forEach(formation => {
            formation.display();
        });
    }
}
