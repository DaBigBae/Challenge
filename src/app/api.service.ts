import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCli: HttpClient) { }

  public getData(){
    return this.httpCli.get(`https://scotch-mvplayer-api.herokuapp.com/api/v1`);
  }
}
