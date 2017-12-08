// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
//
// import { CompleteActivityAnalysisService } from './complete-activity-analysis.service';
// import { Adapter, GET, POST, HttpService, Body, Query, DefaultHeaders } from '../../../../core/services/http';
// import { Employee } from '../models/employee.model';
// import { Response } from '../models/response.model';
// import { Taxonomy } from '../models/taxonomy.model';
//
//
// @Injectable()
// @DefaultHeaders({
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
// })
// export class CompleteActivityAnalysisApiClientService extends HttpService {
//   // TODO: change surveyGuid to surverId
//   /**
//    * Retrieves step number to calculate steps set for input tooltip
//    */
//   @GET('admin/api/Survey/GetIncrement')
//   public GetTaxonomyIncrementStep(@Query('surveyId') surveyId: string ): Observable<number> {
//     return null;
//   }
//
//   /**
//    * Retrieves activity analysis taxonomy structure
//    */
//   @GET('/admin/api/Taxonomy/GetActivityAnalysisTaxonomyStructure')
//   @Adapter(CompleteActivityAnalysisService.ActivityAnalysisTaxonomyAdapter)
//   public GetActivityAnalysisTaxonomyStructure(@Query('surveyGuid') surveyGuid: string ): Observable<{
//     employees: Employee[],
//     responses: Response[],
//     taxonomy: Taxonomy[]
//   }> {
//     return null;
//   }
//
//   /**
//    * Save activity analysis survey response
//    */
//   @POST('/admin/api/SurveyResponse/SetActivityAnalysisSurveyResponse')
//   public SaveActivityAnalysisSurveyResponse(@Body data: {
//     surveyGuid: string,
//     employeeId: number,
//     taxonomyStructureId: number,
//     value: number
//   }[]): Observable<any> {
//     return null;
//   }
// }
