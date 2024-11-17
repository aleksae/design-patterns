import { Beverage } from "./others";

export abstract class CondimentsDecorator extends Beverage {
    beverage: Beverage;
    abstract getDescription(): string;
}

export class Mocha extends CondimentsDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }
    cost(): number {
        return this.beverage.cost() + 0.20;
    }
}

export class Soy extends CondimentsDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }
    cost(): number {
        return this.beverage.cost() + 0.15;
    }
}

export class Whip extends CondimentsDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }
    cost(): number {
        return this.beverage.cost() + 0.10;
    }
}