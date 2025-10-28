import {EntityId} from "../common/EntityId";
import {GroupNode} from "./GroupNode";

export type FirstName = string
export type LastName = string

export abstract class User implements GroupNode<User> {
    protected readonly id: EntityId<'User'>
    protected readonly firstName: FirstName
    protected readonly lastName: LastName

    protected constructor(id: EntityId<'User'>, firstName: FirstName, lastName: LastName) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
    }

    public isEqual(other: User): boolean {
        return this.id.equals(other.id)
    }

    getMembers(): User[] {
        return [this]
    }
}