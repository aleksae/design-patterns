export interface FlyingBehavior {
    fly(): void; 
}

export interface QuackingBehavior {
    quack(): void;
}

export class FlyWithWings implements FlyingBehavior {
    fly(): void {
        console.log("I'm flying with wings!");
    }
}

export class NoFly implements FlyingBehavior {
    fly(): void {
        console.log("I can't fly!");
    }
}

export class Quack implements QuackingBehavior {
    quack(): void {
        console.log("Quack!");
    }
}

export class NoQuack implements QuackingBehavior {
    quack(): void {
        console.log("I can't quack!");
    }
}

export class Squeak implements QuackingBehavior {
    quack(): void {
        console.log("Squeak!");
    }
}