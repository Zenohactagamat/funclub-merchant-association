/**
 * An entity with a uuid
 */
export abstract class EntityWithUuid {
  uuid: string;

  constructor(partial: Partial<any> | null = null) {
    Object.assign(this, partial);
  }
}
