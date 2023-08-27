import Observer from './Observer-interface';
import Subject from './Subject-interface';

class ConcreteSubject implements Subject {

    public state : number;
    private observers: Observer[] = [];

    constructor(newstate : number){
        this.state = newstate;
    }

    subscribe(observer: Observer): void {
        const isExisted = this.observers.includes(observer);
        if(isExisted)
            return console.log('Subject: Observer has been subscribed already.');
        
        console.log('Subject: subscribed an observer.');
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {

        const observerIndex = this.observers.indexOf(observer);
        if(observerIndex === -1)
            console.log('Subject: observer doesnt exist.');

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Unsubscribe an observer.');

    }
    notify(): void {
        // Trigger an update in each subscriber.
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        // When state changes, notify observers.
        this.notify();
    }
}
export default ConcreteSubject;