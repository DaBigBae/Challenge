import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { ApiService } from '../api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  mydatas: any;
  
  constructor(private apiServ: ApiService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.apiServ.getData().subscribe((data)=>{
      console.log(data);
      this.mydatas = data;
      console.log(this.mydatas);
    });
  }
}
