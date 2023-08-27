import Subject from "./Subject-interface";

export default interface Observer{
    
    // Receive update from subject.
    update(subject:Subject):void;
    
}