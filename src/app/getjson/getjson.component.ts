import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getjson',
  templateUrl: './getjson.component.html',
  styleUrls: ['./getjson.component.css']
})
export class GetjsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Injectable()
export class GetJSONService{
  constructor(private http: HttpClient){}
}