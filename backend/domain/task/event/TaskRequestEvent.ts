import {DomainEvent} from "../../common/domain_event/DomainEvent";
import {EntityId} from "../../common/EntityId";

export abstract class TaskRequestEvent implements DomainEvent {
    readonly requestId: EntityId<'RequestId'>
    readonly occurredOn: Date;
    readonly eventName: string

    protected constructor(requestId: EntityId<'RequestId'>, eventName: string) {
        this.requestId = requestId;
        this.occurredOn = new Date();
        this.eventName = eventName;
    }
}

export class TaskRequestAcceptedEvent extends TaskRequestEvent{
    public constructor(requestId: EntityId<'RequestId'>) {
        super(requestId, 'TaskRequestAcceptedEvent');
    }

}

export class TaskRequestRejectedEvent extends TaskRequestEvent{
    public constructor(requestId: EntityId<'RequestId'>) {
        super(requestId, 'TaskRequestAcceptedEvent');
    }
}

export class TaskRequestRollbackEvent extends TaskRequestEvent{
    public constructor(requestId: EntityId<'RequestId'>) {
        super(requestId, 'TaskRequestAcceptedEvent');
    }
}