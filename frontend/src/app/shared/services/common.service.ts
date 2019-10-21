import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class CommonService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  // send a POST request to the API to create a new blog post
  create(data, URL ,token) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this.authService.token
      })
    };
    return this.http.post(API_URL + URL, JSON.stringify(data), httpOptions);
  }

}
