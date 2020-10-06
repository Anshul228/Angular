import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  commet: any[]
  CommentJSONAddress: string = 'assets/data/community/community.json'
  constructor(private _httpClient: HttpClient) {

  }
  getComment(): Observable<any> {
    return this._httpClient.get(this.CommentJSONAddress)
    //.pipe(tap((p)=>console.warn(`all data  ${JSON.stringify(p)}`)))

  }
}
