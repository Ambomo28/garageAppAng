import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Car } from './models';






@Injectable({
  providedIn: 'root'
})

export class GarageService {
    httpClient: any;

    URL = `${environment.apiUrl}/cars`;
    urls = `${environment.apiUrl}`;
    car:  object;

    readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_CARS = "/cars"

  

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_CARS)
  }
 
  addCar(car: Car): Observable<any> {

    return this.http.get(this.API_URL+this.ENDPOINT_CARS);
  }

  deleteSelectedCar(id: number): Observable<any> {
    const url = `${this.urls}/car/${Car.id}`;
    return this.http.put(url, Car);
  }

  updateCar(car: Car): Observable<any> {
    const url = `${this.urls}/car/${Car.id}`;
    return this.http.put(url, car);
  }
}



