import Observer from './Observer-interface';

export default interface Subject {
    // Attach an observer to the subject.
    subscribe(observer:Observer):void;
    // Detach an observer to the subject.
    unsubscribe(observer:Observer):void;

    // Notify all observers about an event.
    notify(): void;
}