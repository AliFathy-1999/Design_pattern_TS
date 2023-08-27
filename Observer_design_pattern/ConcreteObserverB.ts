import ConcreteSubject from "./ConcreteSubject";
import Observer from "./Observer-interface";
import Subject from "./Subject-interface";

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

export default ConcreteObserverA;