import { Duck } from "./duck";
import { Quack, FlyWithWings } from "./behaviors";

export class WildDuck extends Duck {
    constructor(){
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }
    display(): void {
        console.log("I am a wild duck!");
    }
}

export class ExhibitionDuck extends Duck {
    constructor(){
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }
    display(): void {
        console.log("I am an exhibition duck!");
    }
}

