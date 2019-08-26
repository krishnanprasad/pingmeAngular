import { Component, OnInit } from '@angular/core';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'chit-time-table',
  templateUrl: './chit-time-table.component.html',
  styleUrls: ['./chit-time-table.component.css']
})
export class ChitTimeTableComponent implements OnInit {
  ChitId: string;
  tenureTimeTable: any;
  chitTimeTable: any;

  constructor(private _ServiceDescription: ServiceDescriptionService, 
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.ChitId = this.route.snapshot.paramMap.get("chitid");
    this._ServiceDescription.getChitTimeTable(this.ChitId).subscribe(chitdata => {
      if (chitdata["ChitBidTimeTablesList"] != null) {
        debugger;
        this.tenureTimeTable = chitdata["ChitTermGroupsList"];
        this.chitTimeTable = chitdata["ChitBidTimeTablesList"];
       
      }
      else {
        debugger;       
        console.log('No Data Found for Chit Table');
      }
    }
    )
  }

}
