import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[]
  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    //this.data = this._homeService.data
    this._homeService.getData()
      .subscribe({ next: p => this.data = p })
  }

}
