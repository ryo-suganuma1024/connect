import {DomainEvent} from "./DomainEvent";
import {EventHandler} from "./EventHandler";
export class EventDispatcher<T extends DomainEvent> {
    private readonly handlers: Array<EventHandler<T>> = []

    public registerHandler(handler: EventHandler<T>): void {
        this.handlers.push(handler)
    }

    public async dispatch(event: T): Promise<void> {
        for (const handler of this.handlers) {
            await handler(event)
        }
    }
}