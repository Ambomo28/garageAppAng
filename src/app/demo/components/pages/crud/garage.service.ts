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

   
    car:  object;

    URL = `${environment.apiUrl}/cars`;
    urls = `${environment.apiUrl}`;

  

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get<Car[]>(this.URL);
}
 
  addCar(car: Car): Observable<any> {

    return this.http.get(this.URL);
  }

  deleteSelectedCar(id: number): Observable<any> {
    const url = `${this.urls}/car/${Car.id}`;
    return this.http.put(url, Car);
  }

  updateCar(car: Car): Observable<any> {
    const url = `${this.urls}/gi`;
    return this.http.put(url, car);
  }
}



