import {DomainEvent} from "./DomainEvent";
import {EventPublisher} from "./EventPublisher";

export abstract class AggregateRoot implements EventPublisher{
    private readonly domainEvents: DomainEvent[] = []

    protected addDomainEvent(event: DomainEvent): void {
        this.domainEvents.push(event)
    }

    public publishDomainEvents(): DomainEvent[] {
        const events = [...this.domainEvents]
        this.domainEvents.length = 0
        return events
    }
}