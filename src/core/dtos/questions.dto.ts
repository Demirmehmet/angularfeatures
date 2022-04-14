import {Question_choicesDto} from "./question_choices.dto";

export class QuestionsDto {
  question: string;
  choices: [Question_choicesDto];
  published_at: string;
  url: string;
}
