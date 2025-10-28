import {User} from "./User";

export interface GroupNode<UserConcrete extends User> {
    getMembers(): UserConcrete[]
}