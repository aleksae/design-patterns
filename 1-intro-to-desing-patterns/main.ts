import { WildDuck } from "./duck_implementation";
import { Duck } from "./duck";
import { NoFly } from "./behaviors";

let wildDuck: Duck = new WildDuck();
wildDuck.display();
wildDuck.performFly();
wildDuck.performQuack();
wildDuck.performFly();
wildDuck.swim();

let exhibitionDuck: Duck = new WildDuck();
exhibitionDuck.display();
exhibitionDuck.performFly();
exhibitionDuck.performQuack();
exhibitionDuck.setFlyBehavior(new NoFly());
exhibitionDuck.performFly();
exhibitionDuck.swim();



