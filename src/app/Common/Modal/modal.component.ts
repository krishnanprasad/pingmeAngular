import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';
import { ServiceDescriptionService } from 'src/app/Services/service-description.service';
import { SendInvitation } from 'src/app/Interface/send-invitation';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'jw-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;
    @Input() UserList: any;
    CurrentTab: number = 1;
    SearchTerm: string = "";
    SearchNameResult: any;
    NoResultsFound: boolean;
    CreateInvitation:SendInvitation = {
        UserId:'',ChitId:''
    };
    SendInvitationJson: string;
    ChitId: string;
    constructor(private modalService: ModalService, 
        private el: ElementRef, 
        private _ServiceDescription: ServiceDescriptionService,
        private route: ActivatedRoute) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {

        let modal = this;
        console.log('this.UserList');
        console.log(this.UserList);

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }


    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open(): void {

        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }


    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }

    ChangeTab(val) {
        this.CurrentTab = val;
    }

    onSearchChange(searchValue: string): void {
    
        if (searchValue.length > 2) {
            console.log(searchValue);
            
            this._ServiceDescription.SearchUserName(searchValue).subscribe(ResponseData => {
                if (ResponseData != "No User") {
                    this.NoResultsFound = false;
                    debugger;
                    this.SearchNameResult = ResponseData;

                }
                else {
                    this.NoResultsFound = true;
                    this.SearchNameResult = [];
                }
            }
            )
        }
        else {
            this.SearchNameResult = [];
            this.NoResultsFound = true;
        }
    }
    SendInvitation(UserId){
        this.CreateInvitation.ChitId = this.route.snapshot.paramMap.get("chitid");
        this.CreateInvitation.UserId=UserId;
        debugger;
        this.SendInvitationJson = JSON.stringify(this.CreateInvitation)
        this._ServiceDescription.SendInvitation(this.SendInvitationJson).subscribe(ResponseData => {
            if (ResponseData != "No User") {
                this.NoResultsFound = false;
                debugger;
                this.SearchNameResult = ResponseData;

            }
            else {
                this.NoResultsFound = true;
                this.SearchNameResult = [];
            }
        }
        )
    }
}