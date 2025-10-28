import {DomainEvent} from "./DomainEvent";

export interface EventPublisher {
    publishDomainEvents(): DomainEvent[];
}