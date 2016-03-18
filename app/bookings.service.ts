import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {

    private _url = "http://imdigging.hol.es/bookings/2016/03/18/";
    
    
    constructor(private _http: Http) { 
        
    }
    
    getBookings() {
        return this._http.get(this._url)
              .map(res => res.json());
        
    }

}