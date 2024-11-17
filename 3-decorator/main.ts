import { Mocha, Whip } from "./decorators";
import { Beverage, DarkRoast, Espresso } from "./others";

let espresso:Beverage = new Espresso();
console.log(espresso.getDescription() + " $" + espresso.cost());


let darkRoast:Beverage = new DarkRoast();
darkRoast = new Mocha(darkRoast);
darkRoast = new Mocha(darkRoast);
darkRoast = new Whip(darkRoast);

console.log(darkRoast.getDescription() + " $" + darkRoast.cost());

