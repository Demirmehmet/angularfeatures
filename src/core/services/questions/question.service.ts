import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {ResponseModelDTO} from "../../dtos/response-model.dto";
import {QuestionsDto} from "../../dtos/questions.dto";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private apiService: ApiService,
  ) {
  }

  getAllQuestions(): Observable<QuestionsDto[]> {
    return this.apiService.get('questions/');
  }

}
