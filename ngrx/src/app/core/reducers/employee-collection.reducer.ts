// import * as EmployeeCollectionActions from '../actions/employee-collection.actions';
//
// export interface State {
//   loading: boolean;
//   loaded: boolean;
//   failed: boolean;
// }
//
// const initialState: State = {
//   loading: false,
//   loaded: false,
//   failed: false
// };
//
// export function reducer(
//   state = initialState,
//   action: EmployeeCollectionActions.All
// ): State {
//   switch (action.type) {
//     case EmployeeCollectionActions.LOAD_EMPLOYEES: {
//       return {
//         ...state,
//         loading: true
//       };
//     }
//
//     case EmployeeCollectionActions.LOAD_EMPLOYEES_SUCCESS: {
//       return {
//         loading: false,
//         loaded: true,
//         failed: false
//       };
//     }
//
//     case EmployeeCollectionActions.LOAD_EMPLOYEES_FAIL: {
//       return {
//         loading: false,
//         loaded: false,
//         failed: true
//       };
//     }
//
//     default: {
//       return state;
//     }
//   }
// }
//
// export const getLoading = (state: State) => state.loading;
// export const getLoaded = (state: State) => state.loaded;
// export const getFailed = (state: State) => state.failed;
