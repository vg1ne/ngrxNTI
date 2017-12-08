// import { Action } from '@ngrx/store';
//
// import { type } from '../../../../shared/utility/utility-helpers';
// import { PasteEmployeePayload } from "../models/PasteEmployeePayload";
//
// export const SET_ACTIVE_EMPLOYEE = type('[Complete Activity Analysis] Set Active Employee');
// export const COPY_EMPLOYEE = type('[Complete Activity Analysis] Copy Employee');
// export const PASTE_EMPLOYEE = type('[Complete Activity Analysis] Paste Employee');
// export const SELECT_EMPLOYEE = type('[Complete Activity Analysis] Select Employee');
// export const REMOVE_SELECTED_EMPLOYEE = type('[Complete Activity Analysis] Remove Selected Employee');
// export const SET_EMPLOYEES_SELECTED = type('[Complete Activity Analysis] Set All Employees Selected');
// export const CLEAR_COPY_EMPLOYEE = type('[Complete Activity Analysis] Clear Copied Employee');
// /**
//  * Every action is comprised of at least a type and an optional
//  * payload. Expressing actions as classes enables powerful
//  * type checking in reducer functions.
//  *
//  * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
//  */
// export class SetActiveEmployeeAction implements Action {
//   readonly type = SET_ACTIVE_EMPLOYEE;
//
//   constructor(public payload: { id: number }) {}
// }
//
// export class CopyEmployeeAction implements Action {
//   readonly type = COPY_EMPLOYEE;
//
//   constructor(public payload: { id: number }) {}
// }
//
// export class PasteEmployeeAction implements Action {
//   readonly type = PASTE_EMPLOYEE;
//
//   constructor(public payload: PasteEmployeePayload) {}
// }
//
// export class SelectEmployeeAction implements Action {
//   readonly type = SELECT_EMPLOYEE;
//
//   constructor(public payload: { id: number }) {}
// }
//
// export class RemoveSelectedEmployeeAction implements Action {
//   readonly type = REMOVE_SELECTED_EMPLOYEE;
//
//   constructor(public payload: { id: number }) {}
// }
//
// export class SetEmployeesSelectedAction implements Action {
//   readonly type = SET_EMPLOYEES_SELECTED;
//   constructor(public payload: number[]) {}
// }
//
// export class ClearCopyEmployeeAction implements Action {
//   readonly type = CLEAR_COPY_EMPLOYEE;
// }
//
// /**
//  * Export a type alias of all actions in this action group
//  * so that reducers can easily compose action types
//  */
// export type All =
//   SetActiveEmployeeAction
//   | CopyEmployeeAction
//   | PasteEmployeeAction
//   | SelectEmployeeAction
//   | ClearCopyEmployeeAction
//   | RemoveSelectedEmployeeAction
//   | SetEmployeesSelectedAction;
