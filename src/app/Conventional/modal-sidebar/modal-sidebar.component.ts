import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrls: ['./modal-sidebar.component.css']
})
export class ModalSidebarComponent implements OnInit {
  public ModelName: any;
  @Input() private uploadSuccess: EventEmitter<boolean>;
  @Output() private numberGenerated = new EventEmitter<number>();
  @Input('dataValue') dataValue: any;

  // this.ModelName=dataValue;  
  constructor() { }

  ngOnInit() {
    this.uploadSuccess.subscribe(data => {
      if (data != null) {
        this.ModelName = data;
        console.log('event captured' + data);
      }
    });

  }
  public generateNumber() {
    const randomNumber = Math.random();
    this.numberGenerated.emit(randomNumber);
  }


}
