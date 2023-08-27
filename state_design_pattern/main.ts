import ConcreteStateA from "./ConcreteStateAClass";
import Context from "./contextClass";

/**
 * The client code.
 */
const context = new Context(new ConcreteStateA());
context.request1();
context.request2();