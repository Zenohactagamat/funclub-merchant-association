export abstract class EntityWithUuid {
  uuid: string;

  constructor(partial: Partial<any> | null) {
    Object.assign(this, partial);
  }
}
