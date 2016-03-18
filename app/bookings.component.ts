import {Component, OnInit} from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import {HTTP_PROVIDERS} from 'angular2/http'
import { BookingService } from './bookings.service';

@Component({
    selector: 'bookings',
    templateUrl: 'app/bookings.template.html',
    providers : [BookingService,HTTP_PROVIDERS],
    styles :[`
        .list-group-item:hover {
            background-color: blue;
            cursor: default;
        }
    `]
    
    
})

export class BookingsComponent implements OnInit {

    rooms; 
    
    constructor(private _bookingService: BookingService) { }
    
 
    ngOnInit() { 
        this._bookingService.getBookings()
            .subscribe(
                data => {this.rooms = data}
            );
        
    }
}