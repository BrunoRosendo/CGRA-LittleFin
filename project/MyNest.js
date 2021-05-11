import { CGFobject } from '../lib/CGF.js';
import { MyRockSet } from './MyRockSet.js';
import { euclideanDistance } from './utilities/algebra.js';

export class MyNest extends CGFobject {
    // This nest is still very basic [FIX]
    constructor(scene, radius, posX, posZ) {
        super(scene);
        this.posX = posX;
        this.posZ = posZ;
        this.radius = radius;
        this.rockset = new MyRockSet(scene, 500, radius);
        this.extraRocks = [];
    }

    addRock(fish) {
        if (euclideanDistance(fish.position[0], fish.position[2], this.posX, this.posZ) > this.radius)
            return;

        const rock = fish.object.rock;
        rock.posX = Math.random() * 2 * this.radius - this.radius;

        const maxZ = Math.sqrt(this.radius ** 2 - rock.posX**2);
        rock.posZ = Math.random() * 2 * maxZ - maxZ;
        rock.posY = 0;

        this.extraRocks.push(rock);
        delete fish.object.rock;
    }

    display() {
        this.scene.translate(this.posX, 0, this.posZ);

        this.rockset.display();

        this.extraRocks.forEach(rock => {
            rock.material.apply();
            
            this.scene.translate(rock.posX, rock.posY, rock.posZ);
            this.scene.scale(rock.scaleX, rock.scaleY, rock.scaleZ);
            this.scene.rotate(rock.orientation, 0, 1, 0);
            rock.object.display();

            this.scene.popMatrix();
            this.scene.pushMatrix();
        });
        
        this.scene.defaultAppearance.apply();

        this.scene.popMatrix();
        this.scene.translate(-this.posX, 0, -this.posZ);
        this.scene.pushMatrix();
    }
}
