import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService {
    private query: string;
    private API_KEY: string = environment.PIXABY_API_KEY;
    private API_URL: string = environment.PIXABY_API_URL;
    private URL: string = this.API_URL + this.API_KEY + '&q=';
    private perPage: string = "&per_page=10";

    constructor(private _http: HttpClient) { }

    getImage(query): Observable<any[]> {
        return this._http.get<any[]>(this.URL + query);
    }
}