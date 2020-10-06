import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data: any[]
  JsonAddress: string = 'assets/data/home/home.json'

  constructor(private _httpClient: HttpClient) {

  }
  getData(): Observable<any> {
    return this._httpClient.get(this.JsonAddress)
    //.pipe(tap((p)=>console.warn(`all data  ${JSON.stringify(p)}`)))
  }

}
