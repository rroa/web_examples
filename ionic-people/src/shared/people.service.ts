import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleApiService {
    // API base URL
    private baseUrl: string = "https://randomuser.me/api/";

    constructor(private http: Http) { }

    getPerson() : Observable<any> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => {
                return response.json();
            });
    }

    getPeople(limit: number): Observable<any> {
        return this.http.get(`${this.baseUrl}?results=${limit}`)
            .map((response: Response) => {
                return response.json();
            });
    }
}