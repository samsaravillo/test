import { Component, OnInit } from '@angular/core';
import { EnricherService } from './../enricher.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-lift-topology',
  templateUrl: './lift-topology.component.html',
  styleUrls: ['./lift-topology.component.scss']
})
export class LiftTopologyComponent implements OnInit {

  constructor(private enricherService: EnricherService) { }

  lmLifts$: any = []; 
  ngOnInit() {
    
    this.enricherService.getJSON()
      .subscribe(
      data =>  {  this.lmLifts$ = data; console.log(this.lmLifts$) },
      err => console.error(err), 
      () => console.log('getBooks completed') 
      );
    // this.enricherService.getLIft().subscribe(data => this.buildings = data)

  }

  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          "name": "Douglas  Pace"
        },
        {
          "name": "Mcleod  Mueller"
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "name": "Day  Meyers"
        },
        {
          "name": "Aguirre  Ellis"
        },
        {
          "name": "Cook  Tyson"
        }
      ]
    }
  ];

}
