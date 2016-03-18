import {Component, OnInit} from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import {HTTP_PROVIDERS} from 'angular2/http'

import { BookingService } from './bookings.service';
import { SpinnerComponent } from './spinner.component';

@Component({
    selector: 'bookings',
    templateUrl: 'app/bookings.template.html',
    providers : [BookingService,HTTP_PROVIDERS],
    styles :[`
        .list-group-item:hover {
            background-color: #f5f5f5;
            cursor: default;
        }
    `],
    directives: [SpinnerComponent]
    
    
})

export class BookingsComponent implements OnInit {

    rooms; 
    selectedRoom;
    isLoading = true;
    
    constructor(private _bookingService: BookingService) { }
    
    roomSelected(room) {
        this.selectedRoom = room; 
    }
 
    ngOnInit() { 
        this._bookingService.getBookings()
            .subscribe(
                data => {this.rooms = data},
                null,
                () => {this.isLoading = false}
            );
        
    }
}