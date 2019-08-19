import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';
import '../../Common/Modal/modal.component.less';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MAT_DATE_FORMATS } from '@angular/material';

export const DD_MM_YYYY_Format = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'dummy-page',
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.less'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format },
  ]
})
export class DummyPageComponent implements OnInit {

  bodyText: string;
  planModel: any
  helloCheckDate: Date;
  helloCheckDate3: Date;
  helloCheckDate2: Date;
  helloCheckDate1: Date;

  constructor(private modalService: ModalService) {
  }

  toDate(dateStr) {
    var parts = dateStr.split("/");
    debugger;
    return new Date(parts[2], parts[1] - 1, parts[0]);

  }
  ngOnInit() {
    // this.datePipe.transform(this.requestdate, 'MM-dd-yyyy');
    this.bodyText = 'This text can be updated in modal 1';
    this.planModel = { start_time: this.toDate('19/12/2019') };//
    this.helloCheckDate=this.toDate('19/12/2019');
    this.helloCheckDate1=this.toDate('19/12/2019');
    this.helloCheckDate2=this.toDate('19/12/2019');
    this.helloCheckDate3=this.toDate('19/12/2019');
  }

  openModal(id: string) {
    debugger;
    console.log('Modal Value IS------');
    console.log(this.modalService.get());
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
