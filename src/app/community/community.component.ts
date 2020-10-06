import { Component, OnInit } from '@angular/core';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  comment: any[]
  constructor(private _communityService: CommunityService) { }

  ngOnInit(): void {
    this._communityService.getComment()
      .subscribe({ next: p => this.comment = p })
  }

}
