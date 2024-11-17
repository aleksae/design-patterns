import { FlyingBehavior, QuackingBehavior } from "./behaviors";

export abstract class Duck {
    flyBehavior: FlyingBehavior;
    quackBehavior: QuackingBehavior;

    constructor() {}

    public abstract display(): void;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public swim(): void {
        console.log("All ducks float!");
    }

    public setFlyBehavior(newBehavior: FlyingBehavior): void {
        this.flyBehavior = newBehavior;
    }

    public setQuackBehavior(newBehavior: QuackingBehavior): void {
        this.quackBehavior = newBehavior;
    }
}


