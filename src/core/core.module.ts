import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {ApiService} from './services/api.service';

//import {JwtService} from './services/jwt.service';
//import {HttpTokenInterceptor} from './services/http.token.interceptor';
import {HttpClientModule} from '@angular/common/http';

//import {AuthGuard} from './services/auth.guard.service';
import {QuestionService} from "./services/questions/question.service";

@NgModule({
  imports: [HttpClientModule
  ],
  exports: [],
  declarations: [],
  entryComponents: [],
  providers: [
    ApiService
    //JwtService,
    //AuthGuard,
    //AuthGuard,
    //UnAuthGuard,
    , QuestionService
  ]
})
export class CoreModule {
}
