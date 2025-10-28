import {EntityId} from "../common/EntityId";
import {TaskRequest} from "./TaskRequest";

export class Requestee {
    private readonly id: EntityId<'UserId'> | EntityId<'Group'>

    public constructor(id: EntityId<'UserId'> | EntityId<'Group'>) {
        this.id = id
    }

    public decide(willAccept: boolean, request: TaskRequest<'Pending'>): TaskRequest<'Accepted'| 'Rejected'> {
        if (willAccept) {
            return request.markAsAccepted()
        } else {
            return request.markAsRejected()
        }
    }

    public cancelDecision(request: TaskRequest<'Accepted' | 'Rejected'>): TaskRequest<'Pending'> {
        return request.rollbackToPending()
    }
}