// import {Injectable} from '@angular/core';
// import {Effect, Actions} from '@ngrx/effects';
// import {Action, Store} from '@ngrx/store';
// import {Observable} from 'rxjs/Observable';
// import {of} from 'rxjs/observable/of';
//
// import * as EmployeeCollectionActions from '../actions/employee-collection.actions';
// import * as ResponseActions from '../actions/response.actions';
// import * as EmployeeActions from '../actions/employee.actions';
// import {CompleteActivityAnalysisApiClientService} from '../services/complete-activity-analysis-api-client.service';
// import {ActivatedRoute} from '@angular/router';
// import {Response} from "../models/response.model";
// import * as fromCompleteActivityAnalysis from '../reducers/index';
// import {selectConfigSurveyId} from "../../../../core/reducers/index";
//
// @Injectable()
// export class EmployeeEffects {
//
//   constructor(private route: ActivatedRoute,
//               private actions$: Actions,
//               private apiClientService: CompleteActivityAnalysisApiClientService,
//               private store$: Store<any>) {
//   }
//
//   @Effect()
//   getEmployeesData$: Observable<Action> = this.actions$
//     .ofType(EmployeeCollectionActions.LOAD_EMPLOYEES)
//     .switchMap(() => {
//       return this.apiClientService.GetActivityAnalysisTaxonomyStructure(this.route.snapshot.children[0].params.guid)
//         .map((result: any) => new EmployeeCollectionActions.LoadEmployeesSuccessAction(result))
//         .catch(error => of(new EmployeeCollectionActions.LoadEmployeesFailAction()));
//     });
//
//   @Effect()
//   getActivityAnalysisIncrementStep$: Observable<Action> = this.actions$
//     .ofType(EmployeeCollectionActions.LOAD_EMPLOYEES)
//     .withLatestFrom(this.store$.select(selectConfigSurveyId))
//     .switchMap(([collection, surveyId]) => {
//       return this.apiClientService.GetTaxonomyIncrementStep(surveyId)
//         .map((result: number) => new ResponseActions.LoadIncrementSuccessAction(result))
//         .catch(error => of(new ResponseActions.LoadIncrementFailAction(null)));
//     });
//
//   @Effect()
//   saveTaxonomyResponse$: Observable<Action> = this.actions$
//     .ofType(ResponseActions.SET_RESPONSE_VALUE)
//     .map((action: ResponseActions.SetResponseValueAction) => action.payload)
//     .debounceTime(500)
//     .switchMap((response: Response) => {
//       const data = [{
//         surveyGuid: this.route.snapshot.children[0].params.guid,
//         employeeId: response.employeeId,
//         taxonomyStructureId: response.taxonomyStructureId,
//         value: response.value
//       }];
//       return this.apiClientService.SaveActivityAnalysisSurveyResponse(data)
//         .map(() => new ResponseActions.SaveResponsesSuccessAction(null))
//         .catch(error => of(new ResponseActions.SaveResponsesFailAction(null)));
//     });
//
//   @Effect()
//   saveTaxonomyResponses$: Observable<Action> = this.actions$
//     .ofType(EmployeeActions.PASTE_EMPLOYEE)
//     .map((action: EmployeeActions.PasteEmployeeAction) => action.payload.toEmployeeIds)
//     .withLatestFrom(this.store$.select(fromCompleteActivityAnalysis.getResponseCollection))
//     .switchMap(([employeeIds, responseCollection]) => {
//       const surveyGuid = this.route.snapshot.children[0].params.guid;
//       const data = responseCollection
//         .filter((response: Response) => employeeIds.indexOf(response.employeeId) >= 0)
//         .map((response: Response) => ({...response, surveyGuid}));
//       return this.apiClientService.SaveActivityAnalysisSurveyResponse(data)
//         .map(() => new ResponseActions.SaveResponsesSuccessAction(null))
//         .catch(error => of(new ResponseActions.SaveResponsesFailAction(null)));
//     });
// }
