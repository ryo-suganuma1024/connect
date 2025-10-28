import {GroupNode} from "./GroupNode";
import {User} from "./User";
import {EntityId} from "../common/EntityId";

export class Group<UserConcrete extends User> implements GroupNode<UserConcrete> {
    private readonly id: EntityId<'Group'>
    private readonly name: string
    private nodeList: GroupNode<UserConcrete>[]
    constructor(id: EntityId<'Group'>, name: string, nodeList: GroupNode<UserConcrete>[]) {
        this.id = id
        this.name = name
        this.nodeList = nodeList
    }

    getMembers(): UserConcrete[] {
        return this.nodeList.flatMap((node) => node.getMembers())
    }
}