import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export interface User {
    name: {
        title: string,
        first: string,
        last: string
    },
    picture: {
        large: string
    }
}

export interface userResponse {
    results: User[]
}

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    getRandomUser(): Observable<userResponse> {
        return this.http.get<userResponse>('https://randomuser.me/api/');
    }
}