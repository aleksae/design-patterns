import { Mocha, Whip } from "./decorators";
import { Beverage, DarkRoast, Espresso } from "./others";

let beverage:Beverage = new Espresso();
console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage2:Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);

console.log(beverage2.getDescription() + " $" + beverage2.cost());


