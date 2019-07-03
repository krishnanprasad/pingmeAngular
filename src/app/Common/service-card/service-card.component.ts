import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() ServiceData: any;


  private uploadSuccess: EventEmitter<string> = new EventEmitter();
  public randomNumber: number;


  constructor() { }

  onImageUploadSuccess(event) {
   

   if (event.code === 'OK') {     
    }

   // The parent emits the event which was given as `@Input` variable to the child-component
   this.uploadSuccess.emit('true is my love');
}


  ngOnInit() {
    
  }


  public onNumberGenerated(randomNumber: number) {   
    this.randomNumber = randomNumber;  
  }
}
