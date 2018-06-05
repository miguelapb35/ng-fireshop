import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private _errorCodes : Array<string> = [];

  constructor() { }

  public addErrorCode(errorCode : string, errorMessage : string) {
    this._errorCodes[errorCode] = errorMessage;
  }

  public getErrorByCode(errorCode : string) {
    return (this._errorCodes.indexOf(errorCode) !== -1) ? <string> this._errorCodes[errorCode] : <string> 'Not known error!';
  }

}
