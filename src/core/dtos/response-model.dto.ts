import { StatusDto } from './status.dto';

export class ResponseModelDTO{
  statusCode:number;
  status:StatusDto;
  detail: string | undefined;
  result:any;
  errors: string | undefined;
}


