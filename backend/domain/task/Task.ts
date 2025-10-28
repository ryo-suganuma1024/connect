import {EntityId} from "../common/EntityId";
export class Task {
    private readonly id: EntityId<'Task'>
    private readonly requestId: EntityId<'TaskRequest'>
    private readonly assignedTo: EntityId<'UserId'> | EntityId<'Group'>
    private readonly description: string
    private readonly assignedDate: Date
    private readonly completed: boolean

    public constructor(props: {
        id: EntityId<'Task'>,
        requestId: EntityId<'TaskRequest'>,
        assignedTo: EntityId<'UserId'> | EntityId<'Group'>,
        description: string,
        assignedDate: Date,
        completed: boolean
    }) {
        this.id = props.id
        this.requestId = props.requestId
        this.assignedTo = props.assignedTo
        this.description = props.description
        this.assignedDate = props.assignedDate
        this.completed = props.completed
    }
}