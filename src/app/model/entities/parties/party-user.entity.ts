import { User } from '../users';

export interface PartyUser extends User {
  validationState: ValidationState;
}

export enum ValidationState {
  'NOT_SEND' = 0,
  'WAINTING' = 1,
  'ACCEPTED' = 2,
  'DECLINED' = 3,
}
