import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../environments/environment"

//import {Users} from './model/users'
import { throwError } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = environment.baseUrl;
  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  searchResidencias():any {
    const headers = {}
    let options = { headers: headers };

    return this.httpClient.post(`${this.PHP_API_SERVER}/api/buscarResidencias.php`, {
    }, options); 
  }

  searchResidenciasOrder():any {
    const headers = {}
    let options = { headers: headers };

    return this.httpClient.post(`${this.PHP_API_SERVER}/api/buscarResidenciasOrder.php`, {
    }, options); 
  }
}