import {Component} from 'angular2/core';
import { BookingsComponent } from './bookings.component';

@Component({
    selector:'my-app',
    template:`
        <h1>Rehearsal</h1>
        <bookings></bookings>
    `,
    directives : [BookingsComponent]
})

export class AppComponent {
          
    
    
}
