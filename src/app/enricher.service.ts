import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks, Todo, LiftActivities, ITopologies, ITopoTest, LMTopologyLift } from './enricher.interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnricherService {
 
  constructor(private http: HttpClient ) {
}

  getBooks() { 
    return this.http.get<Todo>('https://fakerestapi.azurewebsites.net/api/Books')
  }

  getActivities(): Observable<any> {
    return this.http.get('https://api.github.com/users/jlooper/events')
  }

  // getLIft() { 
  //   return this.http.get('https://www.bosch-connectedbuilding.com/api/v1/topologies/5a1e0c01c2c29108bc0b1db6')
  // }
  private _url : string = "/assets/data/topologies.json";
  private _url2: string = "http://localhost:4200/assets/data/topotest.json";
  private _url3: string = "http://localhost:4200/assets/data/topologies.json";

  getJSON(): Observable<any> {
    return this.http.get(this._url)
  }

  ITopoTest = [];

  getAllLifts() { 
    return this.http.get<ITopoTest[]>(this._url2).map(data => data)
  }

  getLiftTopology() { //: Observable<ITopoTest[]> 
      return this.http.get(this._url2).map(data => { return data; })
  }


}

export abstract class TodoListService {
  /**
   * Returns a list of all of the current user's todos.
   */
  abstract getTodos(): Todo[];

}
