import {EntityId} from "../common/EntityId";
import {TaskRequest} from "./TaskRequest";

export class Requester {
    private readonly id: EntityId<'UserId'> | EntityId<'Group'>

    public constructor(id: EntityId<'UserId'> | EntityId<'Group'>) {
        this.id = id
    }

    public createRequest(to: EntityId<'UserId'> | EntityId<'Group'>, description: string): TaskRequest<'Pending'> {
        return new TaskRequest({
            id: EntityId.createNewId<'TaskRequest'>(),
            from: this.id,
            to: to,
            description: description,
            requestDate: new Date(),
            status: 'Pending'
        })
    }

    public denyRequesteeDecision(request: TaskRequest<'Accepted' | 'Rejected'>): TaskRequest<'Pending'> {
        return request.rollbackToPending()
    }

    public changeTo(request: TaskRequest<'Pending'| 'Rejected'>, newTo: EntityId<'UserId'> | EntityId<'Group'>): TaskRequest<'Pending'> {
        return request.changeTo(newTo)
    }
}