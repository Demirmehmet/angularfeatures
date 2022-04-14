import {Component, Input, OnInit} from '@angular/core';
import {QuestionsDto} from "../../../../core/dtos/questions.dto";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  gridColumns = 3;
  @Input("questions") questions: QuestionsDto[];



  constructor() {
  }

  isLoading: boolean;

  ngOnInit() {
    console.log(this.questions);
  }

}
