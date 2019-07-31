import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';
import '../../Common/Modal/modal.component.less';
@Component({
  selector: 'dummy-page',
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.less']
})
export class DummyPageComponent implements OnInit {

  bodyText: string;

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
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
