import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {QuestionService} from "../core/services/questions/question.service";
import {QuestionsDto} from "../core/dtos/questions.dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: QuestionsDto[];

  constructor(private questionService: QuestionService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe(data => {
      this.questions = data;
      console.log(data);
    }, err => {
      this.openSnackBar(err["errors"]);

    });

    throw new Error('Method not implemented.');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Kapat", {
      duration: 5000,
    });
  }

  title = 'angular-features';

}
