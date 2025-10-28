import {EntityId} from "../common/EntityId";
import {AggregateRoot} from "../common/domain_event/AggregateRoot";

export type TaskRequestStatus = 'Pending' | 'Accepted' | 'Rejected'

export class TaskRequest<Status extends TaskRequestStatus> extends AggregateRoot{
    private readonly id: EntityId<'TaskRequest'>
    private readonly from: EntityId<'UserId'>| EntityId<'Group'>
    private readonly to: EntityId<'UserId'>| EntityId<'Group'>
    private readonly description: string
    private readonly requestDate: Date
    private readonly status: Status

    public constructor(props: {
        id: EntityId<'TaskRequest'>,
        from: EntityId<'UserId'>| EntityId<'Group'>,
        to: EntityId<'UserId'>| EntityId<'Group'>,
        description: string,
        requestDate: Date,
        status: Status
    }) {
        super()
        this.id = props.id
        this.from = props.from
        this.to = props.to
        this.description = props.description
        this.requestDate = props.requestDate
        this.status = props.status
    }

    public markAsAccepted(): TaskRequest<'Accepted'> {

        return new TaskRequest({
            id: this.id,
            from: this.from,
            to: this.to,
            description: this.description,
            requestDate: this.requestDate,
            status: 'Accepted'
        })
    }

    public markAsRejected(): TaskRequest<'Rejected'> {

        return new TaskRequest({
            id: this.id,
            from: this.from,
            to: this.to,
            description: this.description,
            requestDate: this.requestDate,
            status: 'Rejected'
        })
    }

    public rollbackToPending(): TaskRequest<'Pending'> {

        return new TaskRequest({
            id: this.id,
            from: this.from,
            to: this.to,
            description: this.description,
            requestDate: this.requestDate,
            status: 'Pending'
        })
    }

    public changeTo(newTo: EntityId<'UserId'> | EntityId<'Group'>): TaskRequest<'Pending'> {
        return new TaskRequest({
            id: this.id,
            from: this.from,
            to: newTo,
            description: this.description,
            requestDate: this.requestDate,
            status: 'Pending'
        })
    }
}