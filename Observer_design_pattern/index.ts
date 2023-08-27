import ConcreteObserverB from "./ConcreteObserverA";
import ConcreteObserverA from "./ConcreteObserverB";
import ConcreteSubject from "./ConcreteSubject";

const subject = new ConcreteSubject(2);

const observer1 = new ConcreteObserverA();
subject.subscribe(observer1);

const observer2 = new ConcreteObserverB();
subject.subscribe(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.unsubscribe(observer2);

subject.someBusinessLogic();