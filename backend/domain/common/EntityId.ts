export class EntityId<EntityType extends string> {
    private readonly value: string
    constructor(value: string) {
        this.value = value
    }
    toString() { return this.value }
    equals(other: EntityId<EntityType>) { return this.value === other.value }

    static createNewId<EntityType extends string>(): EntityId<EntityType> {
        const uuid = crypto.randomUUID()
        return new EntityId<EntityType>(uuid)
    }

}