import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'invitation',
    templateUrl: './invitation.component.html',
    styleUrls: ['./invitation.component.css']
})

export class InvitationComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

    InvitationList = [
        { servicename: 'Netflix', type: "Utility", brandcolor: '#e52e2d', logo: 'netflix.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Amazon Prime', type: "Utility", brandcolor: '#56ace9', logo: 'amazonprime.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'ICICI Insurance', type: "Self", brandcolor: '#972929', logo: 'iciciinsurance.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Shopper Stop', type: "Gift", brandcolor: '#000000', logo: 'shoppersstop.jpg', method: 'Monthly', connected: 'krishnanprasadraghvendra.93@gmail.com' },
        { servicename: 'RMKV', type: "Gift", brandcolor: '#f2c20f', logo: 'rmkv.jpg', daysleft: '12', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Bajaj', type: "Maintenance", brandcolor: '#1b3399', logo: 'bajaj.jpg', method: 'Monthly', connected: '9790794621' },
        { servicename: 'Croma', type: "Gift", brandcolor: '#00b9bf', logo: 'croma.png', method: 'Monthly', connected: 'krishnanra.92@gmail.com' },

    ]
}